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
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000001, 'ASROCK', 'Asrock D1800B-ITX Intel J1800 1333MHz DDR3 Sodimm, Dual Core Intel CPU Included 10W Low Power Consumption Mini ITX Motherboard (ASRD1800B-ITX)', 'ASRD1800B-ITX', 85, '2yr', 'Asrock Motherboard', 'Akortek', '79,00$ + Tax', 67);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000002, 'ASROCK', 'Asrock Fatal1ty AB350 Gaming-ITX/ac Ryzen AM4 Socket, DDR4 3466+ OC, HDMI, DVI, Mini-ITX Gamer Motherboard - (ASRAB350-GITXAC)', 'ASRAB350-GITXAC', 84, '2yr', 'Asrock Motherboard', 'Akortek', '134,00$ + Tax', 119);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000003, 'ASROCK', 'Asrock Fatal1ty X370 Taichi Ryzen AM4 Socket, 3200+ MHz OC, DDR4, Quad SLI / CrossfireX, m2 SSD, USB 3.1, RGB LED, ATX Gamer Motherboard - (ASRX370-TAICHI)', 'ASRX370-TAICHI', 78, '2yr', 'Asrock Motherboard', 'Akortek', '258,50$ + Tax', 214);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000004, 'ASROCK', 'Asrock H110M-DGS R3.0 Intel H110 2133MHz DDR4 Socket 1151 mATX Motherboard (ASRH110M-DGS-R3) ', 'ASRH110M-DGS-R3', 73, '2yr', 'Asrock Motherboard', 'Akortek', '53,00$ + Tax', 43);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000005, 'ASROCK', 'Asrock H110M-DVS R3.0 Intel H110 2133MHz DDR4 Socket 1151 mATX Motherboard (ASRH110M-DVS-R3) ', 'ASRH110M-DVS-R3', 91, '2yr', 'Asrock Motherboard', 'Akortek', '55,00$ + Tax', 47);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000006, 'ASROCK', 'Asrock H110M-STX Intel H110 2133MHz DDR4 Socket 1151 M.2 Socket Mini STX Motherboard (ASRH110M-STX) ', 'ASRH110M-STX', 55, '2yr', 'Asrock Motherboard', 'Akortek', '109,00$ + Tax', 93);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000007, 'ASROCK', 'Asrock H110TM-ITX R2.0 Intel H110 2133MHz DDR4 Socket 1151 M.2 Socket Mini ITX Motherboard (ASRH110TM-ITXR2) ', 'ASRH110TM-ITXR2', 71, '2yr', 'Asrock Motherboard', 'Akortek', '88,00$ + Tax', 74);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000008, 'ASROCK', 'Asrock H81M-ITX Intel H81 1600MHz DDR3 Mini ITX Motherboard (ASRH81M-ITX)', 'ASRH81M-ITX', 86, '2yr', 'Asrock Motherboard', 'Akortek', '62,50$ + Tax', 54);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000009, 'ASROCK', 'Asrock H81TM-ITX Intel H81, 1600MHz DDR3 Mini ITX Motherboard (ASRH81TMR2-ITX)', 'ASRH81TMR2-ITX', 97, '2yr', 'Asrock Motherboard', 'Akortek', '79,00$ + Tax', 65);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000010, 'ASROCK', 'Asrock IMB-181L Double Gigabit Ethernet, 3 x RS232 COM Port, Intel Q87, "LVDS" , 1600MHz DDR3 Mini-ITX Industrial Motherboard (ASRIMB181L)', 'ASRIMB181L', 93, '2yr', 'Asrock Motherboard', 'Akortek', '210,00$ + Tax', 176);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000011, 'ASROCK', 'Asrock IMB-185 Double Gigabit Ethernet, 3 x COM RS232 PORT, Intel H81, "LVDS", 1600MHz DDR3 Mini-ITX Industrial Motherboard (ASRIMB185)', 'ASRIMB185', 78, '2yr', 'Asrock Motherboard', 'Akortek', '210,00$ + Tax', 184);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000012, 'ASROCK', 'Asrock Q1900B-ITX Intel J1900 1333MHz DDR3, Quad Core Intel CPU Included 10W Low Power Consumption Mini ITX Motherboard (ASRQ1900B-ITX)', 'ASRQ1900B-ITX', 50, '2yr', 'Asrock Motherboard', 'Akortek', '99,00$ + Tax', 81);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000013, 'ASROCK', 'Asrock X99 Extreme3 X99 LGA 2011-3 Socket, DDR4, 3000MHzO.C. ATX Motherboard - (ASRX99-EXTREME3)', 'ASRX99-EXTREME3', 85, '2yr', 'Asrock Motherboard', 'Akortek', '215,00$ + Tax', 182);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000014, 'ASROCK', 'Asrock A320M-DGS AMD A320 AM4 Socket DDR4 3200MHz+OC- Ultra M.2,USB 3.1 Gen 1 Micro-ATX Motherboard - (ASRA320M-DGS)', 'ASRA320M-DGS', 70, '2yr', 'Asrock Motherboard', 'Akortek', '66,00$ + Tax', 53);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000015, 'ASROCK', 'Asrock AB350 Pro4 Ryzen AM4 Socket, 3200+ MHz OC, DDR4, Quad CrossFireX™, M.2 SSD, HDMI, DVI, VGA ATX Gamer Motherboard - (ASRAB350-PRO4)', 'ASRAB350-PRO4', 54, '2yr', 'Asrock Motherboard', 'Akortek', '108,00$ + Tax', 99);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000016, 'ASROCK', 'Asrock Atom DDR3 Sodimm Mini ITX Motherboard (ASRAD2550B-ITX)', 'ASRAD2550B-ITX', 56, '2yr', 'Asrock Motherboard', 'Akortek', '59,00$ + Tax', 49);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000017, 'ASROCK', 'Asrock FM2A68M-DG3+ A68 FM2+ 2400MHz O.C DDR3 mATX Motherboard (ASRFM2A68M-DG3)', 'ASRFM2A68M-DG3', 97, '2yr', 'Asrock Motherboard', 'Akortek', '47,00$ + Tax', 40);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000018, 'ASROCK', 'Asrock H110 PRO BTC+ Ultimate Bitcoin, Ethereum, Zcash Mining Motherboard  + Team 4GB 2400MHz DDR4 Memory (ASRH110PRO-BTC+BND)', 'ASRH110PRO-BTC+BND', 73, '2yr', 'Asrock Motherboard', 'Akortek', '269,00$ + Tax', 223);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000020, 'ASUS', 'Asus  AMD A68H 2400MHzO .C. DDR3 mATX Motherboard (AS-A68HM-K)', 'AS-A68HM-K', 71, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '48,00$ + Tax', 45);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000021, 'ASUS', 'Asus  Amd A68H DDR3 2400MHz O.C. mATX Motherboard (AS-A68HM-PLUS)', 'AS-A68HM-PLUS', 98, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '50,49$ + Tax', 47);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000022, 'ASUS', 'Asus  3.1 FM2+ DDR3 VGA HDMI DVI SATA3 USB3.1 mATX Motherboard (AS-A88XM-A/USB)', 'AS-A88XM-A/USB', 96, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '75,33$ + Tax', 60);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000023, 'ASUS', 'Asus  GAMING Intel B250 DDR4 Socket 1151 HDMI DVI M.2 USB 3.0 ATX Motherboard (AS-B250H)', 'AS-B250H', 59, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '140,30$ + Tax', 123);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000024, 'ASUS', 'Asus  Intel H110 2133MHz DDR4 mATX Motherboard (AS-H110M-C)', 'AS-H110M-C', 72, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '79,35$ + Tax', 69);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000025, 'ASUS', 'Asus  Intel H110 2133MHz DDR4 mATX Motherboard (AS-H110M-D)', 'AS-H110M-D', 65, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '61,99$ + Tax', 55);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000026, 'ASUS', 'Asus  Intel H110 2133MHz DDR4 mATX Motherboard (AS-H110M-K)', 'AS-H110M-K', 65, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '59,00$ + Tax', 50);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000027, 'ASUS', 'Asus  R2.0 Intel H81 1600MHz DDR3 mATX Motherboard (AS-H81M-D)', 'AS-H81M-D', 71, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '53,48$ + Tax', 48);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000028, 'ASUS', 'Asus  Intel H81 1600MHz DDR3 mATX Motherboard (AS-H81M-K)', 'AS-H81M-K', 81, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '52,97$ + Tax', 46);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000029, 'ASUS', 'Asus  Intel H81 1600MHz DDR3 mATX Motherboard (AS-H81M-PLUS)', 'AS-H81M-PLUS', 75, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '81,54$ + Tax', 72);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000030, 'ASUS', 'Asus  XEON Intel C232 LGA1151 DDR4 VGA HDMI USB 3.0 ATX Motherboard (AS-P10S-X)', 'AS-P10S-X', 87, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '189,75$ + Tax', 151);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000031, 'ASUS', 'Asus PRIME  AM4 DDR4 HDMI VGA M.2 AMD A320 USB 3.0 mATX Motherboard (AS-A320M-K)', 'AS-A320M-K', 100, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '74,36$ + Tax', 65);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000032, 'ASUS', 'Asus PRIME  LGA1151 DDR4 HDMI DVI VGA M.2 B250 USB 3.1 mATX Motherboard (AS-B250M-A)', 'AS-B250M-A', 93, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '89,01$ + Tax', 80);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000033, 'ASUS', 'Asus PRIME  2400MHz DDR4 mATX Motherboard (AS-B250M-C)', 'AS-B250M-C', 70, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '113,98$ + Tax', 103);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000034, 'ASUS', 'Asus PRIME  DDR4 2400MHz, LED lighting, M.2, USB 3.0 mATX Motherboard (AS-B250M-K)', 'AS-B250M-K', 54, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '82,80$ + Tax', 72);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000035, 'ASUS', 'Asus PRIME  2400MHz DDR4 mATX Motherboard (AS-B250M-PLUS)', 'AS-B250M-PLUS', 88, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '98,05$ + Tax', 90);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000036, 'ASUS', 'Asus Prime  AMD B350, Ryzen AM4 Socket 3200Mhz OC. HDMI, DVI, VGA DDR4, USB 3.1, ATX Motherboard (AS-B350-PLUS)', 'AS-B350-PLUS', 90, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '115,00$ + Tax', 102);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000037, 'ASUS', 'Asus Prime  AMD B350, Ryzen AM4 Socket 3200MHz HDMI, DVI, VGA DDR4, USB 3.1, m-ATX Motherboard (AS-B350M-A)', 'AS-B350M-A', 90, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '96,31$ + Tax', 87);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000038, 'ASUS', 'Asus Prime  AMD B350, Ryzen AM4 Socket 2666Mhz DVI, VGA DDR4, USB 3.1, m-ATX Motherboard (AS-B350M-K)', 'AS-B350M-K', 78, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '84,00$ + Tax', 73);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000039, 'ASUS', 'Asus PRIME  2400MHz DDR4 mATX Motherboard (AS-H270M-PLUS)', 'AS-H270M-PLUS', 73, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '115,00$ + Tax', 93);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000040, 'ASUS', 'Asus PRIME  X299 LGA 2066 Socket, DDR4 4133MHz, Dual M.2, USB 3.1 ATX Motherboard (AS-X299-A)', 'AS-X299-A', 60, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '333,59$ + Tax', 270);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000041, 'ASUS', 'Asus PRIME  3600MHz DDR4 AMD X399 Socket TR4 Aura Sync RGB LED,Dual M.2,USB 3.1 Gen 2,M.2 Heatsink ATX Motherboard (AS-X399-A)', 'AS-X399-A', 93, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '376,05$ + Tax', 345);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000042, 'ASUS', 'Asus PRIME  Intel Z270 3866Mhz (O.C.) DDR4 Socket 1151 HDMI DVI VGA M.2 USB 3.1 ATX Motherboard (AS-Z270-K)', 'O.C.) DDR4 Socket 1151 HDMI DVI VGA M.2 USB 3.1 ATX Motherboard (AS-Z270-K', 95, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '160,00$ + Tax', 129);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000043, 'ASUS', 'Asus PRIME  Intel Z370 4000Mhz O.C DDR4 Coffe Lake ATX Motherboard (AS-Z370-A)', 'AS-Z370-A', 69, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '213,90$ + Tax', 201);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000044, 'ASUS', 'Asus PRIME  Intel Z370 4000Mhz O.C DDR4 Coffe Lake ATX Motherboard (AS-Z370-P)', 'AS-Z370-P', 73, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '155,00$ + Tax', 128);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000045, 'ASUS', 'Asus ROG MAXIMUS IX CODE Intel Z270 4133MHz+ OC DDR4 ATX Motherboard (AS-MAX-IX-CODE)', 'AS-MAX-IX-CODE', 88, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '371,45$ + Tax', 326);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000046, 'ASUS', 'Asus ROG MAXIMUS IX FORMULA Intel Z270 4133MHz+ OC DDR4 ATX Motherboard (AS-MAX-IX-FORMULA)', 'AS-MAX-IX-FORMULA', 85, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '448,50$ + Tax', 412);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000047, 'ASUS', 'Asus ROG MAXIMUS IX HERO Intel Z270 4133MHz+ DDR4 ATX Motherboard (AS-MAX-IX-HERO)', 'AS-MAX-IX-HERO', 59, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '316,25$ + Tax', 253);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000048, 'ASUS', 'Asus ROG STRIX B250F GAMING 2400MHz DDR4 ATX Motherboard (AS-B250F-GAMING)', 'AS-B250F-GAMING', 76, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '154,68$ + Tax', 125);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000049, 'ASUS', 'Asus ROG STRIX B250G GAMING LGA1151 DDR4 HDMI DVI M.2 B250 USB 3.1 mATX Motherboard (AS-B250G-GAMING)', 'AS-B250G-GAMING', 100, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '97,75$ + Tax', 86);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000050, 'ASUS', 'Asus ROG STRIX H270F GAMING LGA1151 DDR4 DP HDMI DVI M.2 USB 3.1 ATX Motherboard (AS-H270F-GAMING)', 'AS-H270F-GAMING', 97, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '169,00$ + Tax', 138);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000051, 'ASUS', 'Asus ROG STRIX X299-E GAMING LGA 2066 Socket, DDR4 4133Mhz O.C., USB 3.1. 802.11ac Wi-Fi, Dual M.2 Aura Sync RGB LED, ATX Motherboard (AS-X299E-GAMING)', 'AS-X299E-GAMING', 92, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '420,00$ + Tax', 340);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000052, 'ASUS', 'Asus ROG STRIX X370-F GAMING AMD AM4 Socket, DDR4 3200MHz, M.2, USB 3.1, Aura Sync RGB LED ATX Motherboard (AS-X370F-GAMING)', 'AS-X370F-GAMING', 72, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '230,00$ + Tax', 193);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000053, 'ASUS', 'Asus ROG STRIX Z270E GAMING Intel Z270 3866MHz OC DDR4 ATX Motherboard (AS-Z270E-GAMING)', 'AS-Z270E-GAMING', 68, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '269,00$ + Tax', 250);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000054, 'ASUS', 'Asus ROG STRIX Z270I Gaming Intel Z270 4266MHz OC DDR4 Socket 1151 HDMI, DP, Wifi, Mini ITX Motherboard (AS-Z270I-GAMING)', 'AS-Z270I-GAMING', 73, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '225,40$ + Tax', 211);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000055, 'ASUS', 'Asus ROG Strix Z370 E-Gaming Intel Z370 4000Mhz O.C DDR4 Coffe Lake ATX Motherboard (AS-Z370-E)', 'AS-Z370-E', 99, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '269,10$ + Tax', 242);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000056, 'ASUS', 'Asus ROG Strix Z370 F-Gaming Intel Z370 4000Mhz O.C DDR4 Coffe Lake ATX Motherboard (AS-Z370-F) ', 'AS-Z370-F', 70, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '247,25$ + Tax', 224);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000057, 'ASUS', 'Asus ROG Strix Z370 H-Gaming Intel Z370 4000Mhz O.C DDR4 Coffe Lake ATX Motherboard (AS-Z370-H)', 'AS-Z370-H', 70, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '220,80$ + Tax', 194);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000058, 'ASUS', 'Asus STRIX B350-F GAMING AMD AM4 Socket, DDR4 3200MHz, M.2, SATA 6Gbps, USB 3.1, Aura Sync RGB LED ATX Motherboard (AS-B350F-GAMING)', 'AS-B350F-GAMING', 87, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '140,30$ + Tax', 124);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000059, 'ASUS', 'Asus TUF X299 MARK 2 LGA 2066 Socket, DDR4 4133MHz OC, USB 3.1. Dual M.2, Intel Optane™ memory-ready, ATX Motherboard (AS-X299-MARK2)', 'AS-X299-MARK2', 81, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '297,53$ + Tax', 255);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000060, 'ASUS', 'Asus TUF Z270 MARK 1 Intel Z270 3866MHz OC DDR4 Socket 1151 ATX Motherboard (AS-TUF-Z270-M1)', 'AS-TUF-Z270-M1', 50, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '272,73$ + Tax', 242);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000061, 'ASUS', 'Asus TUF Z370-PLUS Intel Z370 4000Mhz O.C DDR4 Coffe Lake ATX Motherboard (AS-Z370-PLUS)', 'AS-Z370-PLUS', 50, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '171,35$ + Tax', 157);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000062, 'ASUS', 'Asus TUF Z370-PRO Intel Z370 4000Mhz O.C DDR4 Coffe Lake ATX Motherboard (AS-Z370-PRO)', 'AS-Z370-PRO', 74, '2yr', 'Asus Motherboard', 'Endeks Bilişim', '196,65$ + Tax', 173);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000064, 'GIGABYTE', 'Gigabyte Aorus GA-Z270X-Gaming 5 4133Mhz OC 2-Way SLI DDR4 LGA1151 ATX Motherboard (GB-GA-Z270X-GAMING-5)', 'GB-GA-Z270X-GAMING-5', 71, '2yr', 'Gigabyte Motherboard', 'Vektron', '213,33$ + Tax', 170);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000065, 'GIGABYTE', 'Gigabyte Aorus GA-Z270X-Gaming 7 Intel Z270 4133Mhz OC 2-Way SLI DDR4 LGA1151 ATX Motherboard (GB-GA-Z270X-GAMING-7)', 'GB-GA-Z270X-GAMING-7', 62, '2yr', 'Gigabyte Motherboard', 'Vektron', '299,00$ + Tax', 239);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000066, 'GIGABYTE', 'Gigabyte Aorus GA-Z270X-Gaming 9 Intel Z270 4133Mhz OC 4-Way SLI DDR4 LGA1151 ATX Motherboard (GB-GA-Z270X-Gaming-9)', 'GB-GA-Z270X-Gaming-9', 73, '2yr', 'Gigabyte Motherboard', 'Vektron', '690,00$ + Tax', 634);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000067, 'GIGABYTE', 'Gigabyte Aorus GA-Z270X-Gaming K5 3866Mhz OC 2-Way SLI DDR4 LGA1151 ATX Motherboard (GB-GA-Z270X-GAMING-K5)', 'GB-GA-Z270X-GAMING-K5', 53, '2yr', 'Gigabyte Motherboard', 'Vektron', '229,00$ + Tax', 190);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000068, 'GIGABYTE', 'Gigabyte Aorus GA-Z270X-Ultra Gaming 3866Mhz OC Intel 2-Way SLI DDR4 LGA1151 ATX Motherboard (GB-GA-Z270X-ULTRA-GAMING)', 'GB-GA-Z270X-ULTRA-GAMING', 59, '2yr', 'Gigabyte Motherboard', 'Vektron', '199,00$ + Tax', 169);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000069, 'GIGABYTE', 'Gigabyte GA-970A-DS3P AMD 970 2000MHz DDR3 ATX Motherboard (GB-GA-970A-DS3P)', 'GB-GA-970A-DS3P', 55, '2yr', 'Gigabyte Motherboard', 'Vektron', '82,80$ + Tax', 74);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000070, 'GIGABYTE', 'Gigabyte  AMD A320 DDR4 3200MHz OC DVI/VGA AM4 Motherboard (GB-GA-A320-DS3)', 'GB-GA-A320-DS3', 78, '2yr', 'Gigabyte Motherboard', 'Vektron', '91,43$ + Tax', 75);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000071, 'GIGABYTE', 'Gigabyte  AMD A320 DDR4 3200MHz OC DVI/VGA AM4 Motherboard (GB-GA-A320M-DS2)', 'GB-GA-A320M-DS2', 85, '2yr', 'Gigabyte Motherboard', 'Vektron', '69,90$ + Tax', 58);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000072, 'GIGABYTE', 'Gigabyte  AMD A320 DDR4 3200MHz OC DVI/VGA/HDMI AM4 Motherboard (GB-GA-A320M-HD2)', 'GB-GA-A320M-HD2', 97, '2yr', 'Gigabyte Motherboard', 'Vektron', '84,00$ + Tax', 71);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000073, 'GIGABYTE', 'Gigabyte  3 AMD B350, Ryzen AM4 Socket 3200 O.C. HDMI, DVI DDR4 USB 3.1 ATX Motherboard (GB-GA-AB350-Gaming)', 'GB-GA-AB350-Gaming', 80, '2yr', 'Gigabyte Motherboard', 'Vektron', '135,70$ + Tax', 127);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000074, 'GIGABYTE', 'Gigabyte  AMD B350 Socket AM4 Ryzen™ DDR4 3200 O.C. MHz Motherboard (GB-GA-AB350-GAMING)', 'GB-GA-AB350-GAMING', 74, '2yr', 'Gigabyte Motherboard', 'Vektron', '110,40$ + Tax', 90);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000075, 'GIGABYTE', 'Gigabyte  3 AMD B350 Socket AM4 Ryzen™ DDR4 3200 O.C. MHz Motherboard (GB-GA-AB350M-GAMING)', 'GB-GA-AB350M-GAMING', 60, '2yr', 'Gigabyte Motherboard', 'Vektron', '101,78$ + Tax', 92);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000076, 'GIGABYTE', 'Gigabyte  AMD X370 Socket AM4 Ryzen™ DDR4 3200 OC Mhz Motherboard (GB-GA-AX370-Gaming)', 'GB-GA-AX370-Gaming', 69, '2yr', 'Gigabyte Motherboard', 'Vektron', '184,00$ + Tax', 152);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000077, 'GIGABYTE', 'Gigabyte  Intel B250 Socket Intel 1151 DDR4 2400Mhz DVI / VGA Motherboard (GB-GA-B250-Fintech)', 'GB-GA-B250-Fintech', 95, '2yr', 'Gigabyte Motherboard', 'Vektron', '200,10$ + Tax', 170);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000078, 'GIGABYTE', 'Gigabyte  2400Mhz DDR4 LGA1151 MICRO ATX Motherboard (GB-GA-B250M-D2V)', 'GB-GA-B250M-D2V', 94, '2yr', 'Gigabyte Motherboard', 'Vektron', '85,96$ + Tax', 81);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000079, 'GIGABYTE', 'Gigabyte  AMD A68M 2133 MHz DDR3 Micro ATX Motherboard (GB-GA-F2A68HM-DS2)', 'GB-GA-F2A68HM-DS2', 75, '2yr', 'Gigabyte Motherboard', 'Vektron', '48,00$ + Tax', 42);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000080, 'GIGABYTE', 'Gigabyte  AMD A88X 2400MHz(OC) DDR3 mATX Motherboard (GB-GA-F2A88XM-DS2)', 'OC) DDR3 mATX Motherboard (GB-GA-F2A88XM-DS2', 88, '2yr', 'Gigabyte Motherboard', 'Vektron', '67,28$ + Tax', 63);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000081, 'GIGABYTE', 'Gigabyte  Intel H110 2133mhz DDR4 mATX Motherboard (GB-GA-H110M-S2)', 'GB-GA-H110M-S2', 58, '2yr', 'Gigabyte Motherboard', 'Vektron', '59,00$ + Tax', 54);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000082, 'GIGABYTE', 'Gigabyte  DDR4 Intel H110 2133MHz DDR4 mATX Motherboard (GB-GA-H110M-S2V)', 'GB-GA-H110M-S2V', 59, '2yr', 'Gigabyte Motherboard', 'Vektron', '55,20$ + Tax', 49);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000083, 'GIGABYTE', 'Gigabyte  2400Mhz OC 2-Way Crossfire LGA1151 DDR4 ATX Motherboard (GB-GA-H270-HD3)', 'GB-GA-H270-HD3', 86, '2yr', 'Gigabyte Motherboard', 'Vektron', '123,05$ + Tax', 100);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000084, 'GIGABYTE', 'Gigabyte  Intel H81 1600 MHz DDR3 mATX Motherboard (GB-GA-H81M-S2V)', 'GB-GA-H81M-S2V', 97, '2yr', 'Gigabyte Motherboard', 'Vektron', '45,94$ + Tax', 39);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000085, 'GIGABYTE', 'Gigabyte H170-HD3/DDR4 Intel H170 2133MHz DDR4 ATX Motherboard (GB-GA-H170-HD3)', 'GB-GA-H170-HD3', 57, '2yr', 'Gigabyte Motherboard', 'Vektron', '119,49$ + Tax', 97);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000086, 'GIGABYTE', 'Gigabyte H270-Gaming 3 2400Mhz OC DDR4 LGA1151 ATX Motherboard (GB-H270-GAMING-3)', 'GB-H270-GAMING-3', 60, '2yr', 'Gigabyte Motherboard', 'Vektron', '152,95$ + Tax', 134);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000087, 'GIGABYTE', 'Gigabyte X299 AORUS Gaming 7 Intel X299 Socket 2066 DDR4 4400 OC Motherboard (GB-X299-GAMING7)', 'GB-X299-GAMING7', 75, '2yr', 'Gigabyte Motherboard', 'Vektron', '523,25$ + Tax', 439);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000088, 'GIGABYTE', 'Gigabyte X299 UD4 Intel X299 Socket 2066 DDR4 4400 OC Motherboard (GB-X299-UD4)', 'GB-X299-UD4', 97, '2yr', 'Gigabyte Motherboard', 'Vektron', '305,90$ + Tax', 266);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000089, 'GIGABYTE', 'Gigabyte Z370 AORUS Gaming 5 Intel Z370 4133MHz DDR4 Coffe Lake ATX Motherboard (GB-Z370-AORUS-GAMING5)', 'GB-Z370-AORUS-GAMING5', 74, '2yr', 'Gigabyte Motherboard', 'Vektron', '272,55$ + Tax', 234);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000090, 'GIGABYTE', 'Gigabyte Z370 AORUS Gaming 7 Intel Z370 4133MHz DDR4 Coffe Lake ATX Motherboard (GB-Z370-AORUS-GAMING7)', 'GB-Z370-AORUS-GAMING7', 84, '2yr', 'Gigabyte Motherboard', 'Vektron', '309,35$ + Tax', 247);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000091, 'GIGABYTE', 'Gigabyte Z370 AORUS Ultra Gaming Intel Z370 4000MHz DDR4 Coffe Lake ATX Motherboard (GB-Z370-AORUS-ULTRA-GAMING)', 'GB-Z370-AORUS-ULTRA-GAMING', 58, '2yr', 'Gigabyte Motherboard', 'Vektron', '217,35$ + Tax', 193);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000092, 'GIGABYTE', 'Gigabyte Z370-HD3 Intel Z370 4000MHz DDR4 Coffe Lake ATX Motherboard (GB-Z370-HD3)', 'GB-Z370-HD3', 66, '2yr', 'Gigabyte Motherboard', 'Vektron', '149,50$ + Tax', 136);
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd, price_raw) VALUES (16000093, 'GIGABYTE', 'Gigabyte Z370-HD3P Intel Z370 4000MHz DDR4 Coffe Lake ATX Motherboard (GB-Z370-HD3P)', 'GB-Z370-HD3P', 89, '2yr', 'Gigabyte Motherboard', 'Vektron', '171,35$ + Tax', 140);