CREATE TABLE IF NOT EXISTS products (
    pid INT NOT NULL PRIMARY KEY,
    brand VARCHAR(50) CHARACTER SET utf8 NOT NULL,
    name VARCHAR(200) CHARACTER SET utf8 NOT NULL,
    model_no VARCHAR(50) CHARACTER SET utf8 NOT NULL,
    quantity INT NOT NULL,
    warranty_status VARCHAR(5) CHARACTER SET utf8 NOT NULL,
    on_sale TINYINT(1) DEFAULT 0,
    description VARCHAR(50) CHARACTER SET utf8 NOT NULL,
    distributor VARCHAR(50) CHARACTER SET utf8 NOT NULL,
    price_usd VARCHAR(20) CHARACTER SET utf8 NOT NULL,
    price_raw INT NOT NULL
    );
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000001, 'AMD', 'Amd FirePro W2100 2GB 128Bit GDDR3 GPU (AMDFPROW2100)', 'AMDFPROW2100', 55, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '154,00$ + Tax', 137);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000002, 'AMD', 'Amd FirePro W4100 2GB 128Bit GDDR5 GPU (100-505979)', '100-505979', 60, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '199,00$ + Tax', 163);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000003, 'AMD', 'Amd FirePro W4300 4GB 128Bit GDDR5 GPU (100-505973)', '100-505973', 51, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '335,00$ + Tax', 294);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000004, 'AMD', 'Amd FirePro W5100 4GB 128Bit GDDR5 GPU (100-505974)', '100-505974', 97, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '409,00$ + Tax', 364);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000005, 'AMD', 'Amd FirePro W600 2GB 128Bit GDDR5 GPU (100-505968)', '100-505968', 65, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '829,00$ + Tax', 721);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000006, 'AMD', 'Amd GT1030 2GB 64Bit GDDR5 GPU (GT1030-SL-2G-BR)', 'GT1030-SL-2G-BR', 90, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '93,91$ + Tax', 88);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000007, 'AMD', 'Amd GT1030 2GB Phoenix 64Bit GDDR5 GPU (PH-GT1030-O2G)', 'PH-GT1030-O2G', 85, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '100,24$ + Tax', 83);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000008, 'AMD', 'Amd GT640 1GB 64Bit GDDR5 GPU (GT640-1GD5-L)', 'GT640-1GD5-L', 66, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '92,03$ + Tax', 84);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000009, 'AMD', 'Amd GTX1050TI 4GB 128Bit GDDR5 Phoenix GPU (PH-GTX1050TI-4G)', 'PH-GTX1050TI-4G', 66, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '217,28$ + Tax', 180);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000010, 'AMD', 'Amd R7 240 2GB 128Bit DDR3 GPU (R7240-2GD3-L)', 'R7240-2GD3-L', 69, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '60,45$ + Tax', 55);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000011, 'AMD', 'Amd R7 240 OC 4GB 128Bit DDR3 GPU (R7240-OC-4GD3-L)', 'R7240-OC-4GD3-L', 72, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '87,60$ + Tax', 74);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000012, 'AMD', 'Amd RX550 4GB 128Bit GDDR5 GPU (RX550-4G)', 'RX550-4G', 68, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '145,60$ + Tax', 119);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000013, 'AMD', 'Amd RX560 2GB 128Bit GDDR5 GPU (RX560-O2G)', 'RX560-O2G', 90, '2yr', 'Amd Desktop Graphics/GPU', 'Endeks Bilişim', '155,68$ + Tax', 133);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000015, 'GIGABYTE', 'Gigabyte GT 1030 2GB 64Bit GDDR5 GPU (GV-N1030D5-2GL)', 'GV-N1030D5-2GL', 58, '2yr', 'Gigabyte Desktop Graphics/GPU', 'Vektron', '105,46$ + Tax', 87);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000016, 'GIGABYTE', 'Gigabyte GTX1050 2GB 128Bit GDDR5 O.C GPU (GV-N1050OC-2GD)', 'GV-N1050OC-2GD', 81, '2yr', 'Gigabyte Desktop Graphics/GPU', 'Vektron', '198,38$ + Tax', 188);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000017, 'GIGABYTE', 'Gigabyte GTX1050TI 4GB 128Bit GDDR5 Mini O.C GPU (GV-N105TOC-4GL)', 'GV-N105TOC-4GL', 61, '2yr', 'Gigabyte Desktop Graphics/GPU', 'Vektron', '275,20$ + Tax', 233);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000018, 'GIGABYTE', 'Gigabyte GTX1050TI 4GB GDDR5 128Bit GPU (GV-N105TD5-4GD)', 'GV-N105TD5-4GD', 74, '2yr', 'Gigabyte Desktop Graphics/GPU', 'Vektron', '275,20$ + Tax', 233);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000019, 'GIGABYTE', 'Gigabyte GTX1080TI AORUS 11GB 352Bit GDDR5X GPU (GV-N108TAORUS-11GD)', 'GV-N108TAORUS-11GD', 94, '2yr', 'Gigabyte Desktop Graphics/GPU', 'Vektron', '1.257,76$ + Tax', 1157);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000021, 'PNY', 'Pny Quadro K420 4GB 128Bit DDR3 Professional GPU (VCQK420-2G-PB)', 'VCQK420-2G-PB', 69, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '136,85$ + Tax', 128);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000022, 'PNY', 'Pny Quadro K620 2GB 128Bit DDR3 Professional GPU (VCQK620-PB)', 'VCQK620-PB', 55, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '197,80$ + Tax', 178);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000023, 'PNY', 'Pny Quadro P1000 DP 4GB 128Bit GDDR5 Low Profile GPU (VCQP1000-PB)', 'VCQP1000-PB', 69, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '422,05$ + Tax', 384);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000024, 'PNY', 'Pny Quadro P1000 DVI 4GB 128Bit GDDR5 GPU (VCQP1000DVI-PB)', 'VCQP1000DVI-PB', 51, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '424,35$ + Tax', 364);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000025, 'PNY', 'Pny Quadro P2000 5GB 160Bit GDDR5 GPU (VCQP2000-PB)', 'VCQP2000-PB', 54, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '552,00$ + Tax', 502);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000026, 'PNY', 'Pny Quadro P400 2GB 64Bit GDDR3 GPU (VCQP400-PB)', 'VCQP400-PB', 67, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '151,23$ + Tax', 130);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000027, 'PNY', 'Pny Quadro P400 2GB 64Bit GDDR3 GPU (VCQP400DVI-PB)', 'VCQP400DVI-PB', 59, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '178,25$ + Tax', 146);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000028, 'PNY', 'Pny Quadro P4000 8GB 256Bit GDDR5 GPU (VCQP4000-PB)', 'VCQP4000-PB', 81, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '1.035,00$ + Tax', 910);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000029, 'PNY', 'Pny Quadro P600 2GB 128Bit GDDR5 GPU (VCQP600-PB)', 'VCQP600-PB', 58, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '224,25$ + Tax', 195);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000030, 'PNY', 'Pny Quadro P600 2GB 128Bit GDDR5 GPU (VCQP600DVI-PB)', 'VCQP600DVI-PB', 82, '2yr', 'Pny Desktop Graphics/GPU', 'Endeks', '226,55$ + Tax', 199);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000032, 'PALIT', 'Palit GeForce® GT1030 2GB GDDR5 GPU (NE5103000646-1080F)', 'NE5103000646-1080F', 68, '2yr', 'Palit Desktop Graphics/GPU', 'Akortek', '83,00$ + Tax', 74);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000034, 'SAPPHIRE', 'Sapphire GPro 4200 4GB 128Bit GDDR5 4 x Mini DisplayPort Professional Eyefinity GPU (32255-00-21G)', '32255-00-21G', 84, '2yr', 'Sapphire Desktop Graphics/GPU', 'Endeks Bilişim', '229,00$ + Tax', 217);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000035, 'SAPPHIRE', 'Sapphire R5 230 1GB 64Bit DDR3 GPU (11233-01-20G)', '11233-01-20G', 94, '2yr', 'Sapphire Desktop Graphics/GPU', 'Endeks Bilişim', '41,40$ + Tax', 36);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000036, 'SAPPHIRE', 'Sapphire RX550 2GB PULSE 128Bit GDDR5 GPU (11268-03-20G)', '11268-03-20G', 93, '2yr', 'Sapphire Desktop Graphics/GPU', 'Endeks Bilişim', '154,10$ + Tax', 129);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (13000037, 'SAPPHIRE', 'Sapphire RX580 8GB NITRO+ 256Bit GDDR5 GPU (11265-01-20G)', '11265-01-20G', 58, '2yr', 'Sapphire Desktop Graphics/GPU', 'Endeks Bilişim', '613,00$ + Tax', 514);
