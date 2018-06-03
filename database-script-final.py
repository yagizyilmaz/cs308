#!/usr/bin/env python

"""
HOW TO RUN
./database-script.py case.txt 10 "Computer Case" > case.sql
./database-script.py cooler.txt 11 "CPU Cooler/Processor Cooler" > cooler.sql
./database-script.py cpu.txt 12 "Desktop CPU/Processor" > cpu.sql
./database-script.py gpu.txt 13 "Desktop Graphics/GPU" > gpu.sql
./database-script.py hdd.txt 14 "Hard Disk Drive/HDD" > hdd.sql
./database-script.py monitor.txt 15 "Monitor/Display" > monitor.sql
./database-script.py motherboard.txt 16 "Motherboard" > motherboard.sql
./database-script.py power-supply.txt 17 "Desktop Power Supply/PSU" > psu.sql
./database-script.py ram.txt 18 "Desktop Memory/RAM" > ram.sql
./database-script.py ssd.txt 19 "Solid State Drive/SSD/Solid State Disk" > ssd.sql
"""

import io
import sys
from random import randint

def pidPadding(group, id): # function to generate product id  
    padding = 8 - (len(group) + len(id))
    return group + '0' * padding + id

def changeCase(string):
    temp = string.split()
    for i in range(len(temp)):
        temp[i] = temp[i][0:1].upper() + temp[i][1:].lower()
    return ' '.join(temp)

def kdvToTax(string):
    return string.rsplit('- ')[-1].rsplit(' =')[0].rsplit(' ')[0] + ' + Tax'

def rawPrice(string):
    temp = string.rsplit('- ')[-1].rsplit(' =')[0].rsplit('$')[0]
    temp = temp.replace('.','')
    temp = temp.replace(',','.')
    tempNum = randint(5,20)*0.01
    return str(int(float(temp)*(1-tempNum)))

with io.open(sys.argv[1], 'r', encoding='utf-8') as f: # read the whole file into a list
    content = f.readlines() 

content = [x.strip() for x in content] # remove newlines
content = list(filter(None, content)) # remove empty strings

brand = content[0].translate({ord(i):None for i in '-'}) # remove '-' chars from string

distributorList = {"aerocool": "akortek", "cooler master": "vektron", "corsair": "vektron", "dark": "akortek",
                   "silverstone": "akortek", "tx": "akortek", "zalman": "gumen group", "amd": "endeks bilişim",
                   "akasa": "akortek", "intel": "penta", "gigabyte": "vektron", "pny": "endeks", "palit": "akortek",
                   "sapphire": "endeks bilişim", "seagate": "arena bilgisayar", "toshiba": "tnb bilgisayar",
                   "western digital": "index bilgisayar", "aoc": "tecpro", "acer": "acer türkiye", "asus": "endeks bilişim",
                   "benq": "vektron", "dell": "arena", "hp": "penta", "lg": "intek", "philips": "tecpro", "samsung": "arena",
                   "viewsonic": "index", "asrock": "akortek", "fsp": "segment bilgisayar", "high power": "akortek",
                   "seasonic": "akortek", "thermaltake": "vektron", "adata": "datastar", "crucial": "turanlı elektronik",
                   "gskill": "vektron", "hilevel": "arena", "kingston": "index", "team": "akortek", "lacie": "nova fotograf",
                   "sandisk": "remgsm"}


print('CREATE TABLE IF NOT EXISTS products (\n\
    pid INT NOT NULL PRIMARY KEY,\n\
    brand VARCHAR(50) CHARACTER SET utf8 NOT NULL,\n\
    name VARCHAR(200) CHARACTER SET utf8 NOT NULL,\n\
    model_no VARCHAR(50) CHARACTER SET utf8 NOT NULL,\n\
    quantity INT NOT NULL,\n\
    warranty_status VARCHAR(5) CHARACTER SET utf8 NOT NULL,\n\
    on_sale TINYINT(1) DEFAULT 0,\n\
    description VARCHAR(50) CHARACTER SET utf8 NOT NULL,\n\
    distributor VARCHAR(50) CHARACTER SET utf8 NOT NULL,\n\
    price_usd VARCHAR(20) CHARACTER SET utf8 NOT NULL,\n\
    price_raw INT NOT NULL\n\
    );')

for i in range(len(content)):
    temp = content[i].split(' ', 1)[0]
    if temp[0] == '-':
        brand = content[i].translate({ord(i): None for i in '-'})
    else:
        print('INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (' +
              pidPadding(sys.argv[2], str(i))+ ', ' +
              '\'' + brand + '\', \'' +
              changeCase(brand) + ' ' +
              content[i].split(' ', 1)[-1].rsplit(' -', 1)[0]
              + '\', \'' + content[i].split('(', 1)[-1].rsplit(')', 1)[0] +
              '\', ' + str(randint(50, 100)) + ', \'2yr\', \''
              + changeCase(brand) + ' ' + sys.argv[3] + '\', \'' 
              + changeCase(distributorList[brand.lower()]) + '\', \'' +
              kdvToTax(content[i]) + '\', ' +
              rawPrice(content[i])
              +');')