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
    price_usd VARCHAR(20) CHARACTER SET utf8 NOT NULL
    );
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000001, 'ADATA', 'Adata SU650 240GB 520-450MB/s SSD (ASU650SS-240GT-C)', 'ASU650SS-240GT-C', 81, '2yr', 'Adata Solid State Drive', 'Datastar', '89,00$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000002, 'ADATA', 'Adata SU700 480GB 560-520MB/s SSD (ASU700SS-480GT-C)', 'ASU700SS-480GT-C', 96, '2yr', 'Adata Solid State Drive', 'Datastar', '192,64$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000003, 'ADATA', 'Adata SU650 120GB 520-320MB/s SSD (ASU650SS-120GT-C)', 'ASU650SS-120GT-C', 85, '2yr', 'Adata Solid State Drive', 'Datastar', '53,98$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000004, 'ADATA', 'Adata SU700 240GB 560-520MB/s SSD Disk (ASU700SS-240GT-C)', 'ASU700SS-240GT-C', 97, '2yr', 'Adata Solid State Drive', 'Datastar', '91,62$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000006, 'CORSAIR', 'Corsair Force LE 480GB 550-500MB/s SSD (CSSD-F480GBLEB)', 'CSSD-F480GBLEB', 79, '2yr', 'Corsair Solid State Drive', 'Vektron', '167,89$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000007, 'CORSAIR', 'Corsair Force LE200 120GB 550-500MB/s SSD (CSSD-F120GBLE200C)', 'CSSD-F120GBLE200C', 55, '2yr', 'Corsair Solid State Drive', 'Vektron', '49,84$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000008, 'CORSAIR', 'Corsair Force LE200 240GB 550-500MB/s SSD (CSSD-F240GBLE200)', 'CSSD-F240GBLE200', 63, '2yr', 'Corsair Solid State Drive', 'Vektron', '87,36$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000009, 'CORSAIR', 'Corsair Force MP500 120GB 3000-2400MB/s m2 NVMe PCIe SSD (CSSD-F120GBMP500)', 'CSSD-F120GBMP500', 79, '2yr', 'Corsair Solid State Drive', 'Vektron', '97,33$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000010, 'CORSAIR', 'Corsair Force MP500 240GB 3000-2400MB/s m2 NVMe PCIe SSD (CSSD-F240GBMP500)', 'CSSD-F240GBMP500', 73, '2yr', 'Corsair Solid State Drive', 'Vektron', '162,40$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000011, 'CORSAIR', 'Corsair Force MP500 480GB 3000-2400MB/s m2 NVMe PCIe SSD (CSSD-F480GBMP500)', 'CSSD-F480GBMP500', 87, '2yr', 'Corsair Solid State Drive', 'Vektron', '302,29$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000012, 'CORSAIR', 'Corsair Neutron XTİ Series 240GB 540-540 MB/s SATAIII SSD (CSSD-N240GBXTI)', 'CSSD-N240GBXTI', 73, '2yr', 'Corsair Solid State Drive', 'Vektron', '143,25$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000013, 'CORSAIR', 'Corsair Neutron XTİ Series 480GB 560-540 MB/s SATAIII SSD (CSSD-N480GBXTI)', 'CSSD-N480GBXTI', 63, '2yr', 'Corsair Solid State Drive', 'Vektron', '227,25$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000015, 'CRUCIAL', 'Crucial MX300 1TB 530-510MB/s SSD (CT1050MX300SSD1)', 'CT1050MX300SSD1', 89, '2yr', 'Crucial Solid State Drive', 'Turanlı Elektronik', '350,64$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000016, 'CRUCIAL', 'Crucial MX300 1TB m.2 530-510MB/s SSD (CT1050MX300SSD4)', 'CT1050MX300SSD4', 89, '2yr', 'Crucial Solid State Drive', 'Turanlı Elektronik', '278,88$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000017, 'CRUCIAL', 'Crucial MX500 1TB Sata3 560-510MB/s SSD Disk (CT1000MX500SSD1)', 'CT1000MX500SSD1', 68, '2yr', 'Crucial Solid State Drive', 'Turanlı Elektronik', '308,00$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000018, 'CRUCIAL', 'Crucial MX500 250GB Sata3 560-510MB/s SSD Disk (CT250MX500SSD1)', 'CT250MX500SSD1', 71, '2yr', 'Crucial Solid State Drive', 'Turanlı Elektronik', '92,96$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000019, 'CRUCIAL', 'Crucial MX500 2TB Sata3 560-510MB/s SSD Disk (CT2000MX500SSD1)', 'CT2000MX500SSD1', 50, '2yr', 'Crucial Solid State Drive', 'Turanlı Elektronik', '588,00$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000020, 'CRUCIAL', 'Crucial MX500 500GB Sata3 560-510MB/s SSD Disk (CT500MX500SSD1)', 'CT500MX500SSD1', 82, '2yr', 'Crucial Solid State Drive', 'Turanlı Elektronik', '162,40$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000022, 'HP', 'Hp SAS 300GB 2.5 SFF 6G 10K RPM SC ENTERPRISE HOT PLUG (HP-652564-B21)', 'HP-652564-B21', 70, '2yr', 'Hp Solid State Drive', 'Penta', '196,00$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000024, 'HILEVEL', 'Hilevel 120GB 530MB-430MB/s M.2 Sata PCI-E 3.0 SSD (HLV-M2SSD2280/120G)', 'HLV-M2SSD2280/120G', 84, '2yr', 'Hilevel Solid State Drive', 'Arena', '60,00$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000025, 'HILEVEL', 'Hilevel 240GB 530MB-430MB/s M.2 Sata PCI-E 3.0 SSD (HLV-M2SSD2280/240G)', 'HLV-M2SSD2280/240G', 63, '2yr', 'Hilevel Solid State Drive', 'Arena', '98,40$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000026, 'HILEVEL', 'Hilevel Ultra 120GB 550-530MB/s SSD (HLV-SSD30ULT/120G)', 'HLV-SSD30ULT/120G', 69, '2yr', 'Hilevel Solid State Drive', 'Arena', '46,80$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000027, 'HILEVEL', 'Hilevel Ultra 240GB 550-530MB/s SSD (HLV-SSD30ULT/240G)', 'HLV-SSD30ULT/240G', 65, '2yr', 'Hilevel Solid State Drive', 'Arena', '86,28$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000028, 'HILEVEL', 'Hilevel Ultra 480GB 550-530MB/s SSD (HLV-SSD30ULT/480G)', 'HLV-SSD30ULT/480G', 77, '2yr', 'Hilevel Solid State Drive', 'Arena', '186,00$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000030, 'INTEL', 'Intel OPTANE 16GB 1350-290MB/s SSD (MEMPEK1W016GAXT957790)', 'MEMPEK1W016GAXT957790', 77, '2yr', 'Intel Solid State Drive', 'Penta', '45,92$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000031, 'INTEL', 'Intel OPTANE 32GB 1350-290MB/s SSD (MEMPEK1W032GAXT957793)', 'MEMPEK1W032GAXT957793', 81, '2yr', 'Intel Solid State Drive', 'Penta', '72,80$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000033, 'KINGSTON', 'Kingston HyperX Predator 240GB 1400-1000MB/s M.2 Gen2 X4 SSD (SHPM2280P2/240G)', 'SHPM2280P2/240G', 66, '2yr', 'Kingston Solid State Drive', 'Index', '159,00$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000034, 'KINGSTON', 'Kingston HyperX Predator 240GB 1400-1000MB/s PCI-E Gen2 X4 HHHL SSD (SHPM2280P2H/240G)', 'SHPM2280P2H/240G', 64, '2yr', 'Kingston Solid State Drive', 'Index', '203,84$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000035, 'KINGSTON', 'Kingston HyperX Predator 480GB 1400-1000MB/s PCI-E Gen2 X4 HHHL SSD (SHPM2280P2H/480G)', 'SHPM2280P2H/480G', 62, '2yr', 'Kingston Solid State Drive', 'Index', '332,64$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000036, 'KINGSTON', 'Kingston HyperX Savage 240GB 560-530MB/s SSD (SHSS37A/240G)', 'SHSS37A/240G', 69, '2yr', 'Kingston Solid State Drive', 'Index', '133,28$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000037, 'KINGSTON', 'Kingston HyperX Savage 480GB 560-530MB/s SSD (SHSS37A/480G)', 'SHSS37A/480G', 97, '2yr', 'Kingston Solid State Drive', 'Index', '211,68$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000038, 'KINGSTON', 'Kingston HyperX Savage 960GB 560-530MB/s SSD (SHSS37A/960G)', 'SHSS37A/960G', 85, '2yr', 'Kingston Solid State Drive', 'Index', '390,88$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000039, 'KINGSTON', 'Kingston KC1000 480GB 2900-1900MB/s M.2 PCI-E NWMe SSD (KN-SKC1000/480G)', 'KN-SKC1000/480G', 90, '2yr', 'Kingston Solid State Drive', 'Index', '226,24$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000040, 'KINGSTON', 'Kingston KC1000 960GB 2900-1900MB/s M.2 PCI-E NWMe SSD (KN-SKC1000/960G)', 'KN-SKC1000/960G', 88, '2yr', 'Kingston Solid State Drive', 'Index', '442,40$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000041, 'KINGSTON', 'Kingston SSDNow 120GB 550-200MB/s m2 SSD (SM2280S3G2/120G)', 'SM2280S3G2/120G', 100, '2yr', 'Kingston Solid State Drive', 'Index', '67,20$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000042, 'KINGSTON', 'Kingston SSDNow 120GB 550-520MB/s mSATA SSD (SMS200S3/120G)', 'SMS200S3/120G', 73, '2yr', 'Kingston Solid State Drive', 'Index', '68,32$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000043, 'KINGSTON', 'Kingston SSDnow 240GB 540-530MB/s mSATA SSD (SMS200S3/240G)', 'SMS200S3/240G', 88, '2yr', 'Kingston Solid State Drive', 'Index', '117,60$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000044, 'KINGSTON', 'Kingston SSDNow 240GB 550MB-330MB/s M.2 Sata3 SSD (SM2280S3G2/240G)', 'SM2280S3G2/240G', 58, '2yr', 'Kingston Solid State Drive', 'Index', '111,89$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000045, 'KINGSTON', 'Kingston SSDnow 480GB 530-340MB/s mSATA SSD (SMS200S3/480G)', 'SMS200S3/480G', 89, '2yr', 'Kingston Solid State Drive', 'Index', '245,28$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000046, 'KINGSTON', 'Kingston SSDnow 480GB 550-520MB/s M.2 SSD (SM2280S3G2/480G)', 'SM2280S3G2/480G', 63, '2yr', 'Kingston Solid State Drive', 'Index', '199,36$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000047, 'KINGSTON', 'Kingston SSDNow A400 120GB 500/320MB/s SSD (SSA400S37/120G)', 'SSA400S37/120G', 56, '2yr', 'Kingston Solid State Drive', 'Index', '44,52$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000048, 'KINGSTON', 'Kingston SSDNow A400 240GB 500/350MB/s SSD (SSA400S37/240G)', 'SSA400S37/240G', 52, '2yr', 'Kingston Solid State Drive', 'Index', '95,50$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000049, 'KINGSTON', 'Kingston SSDNow A400 480GB 500/450MB/s SSD (SSA400S37/480G)', 'SSA400S37/480G', 63, '2yr', 'Kingston Solid State Drive', 'Index', '156,80$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000050, 'KINGSTON', 'Kingston SSDNow KC400 256GB 550-540MB/s SSD (SKC400S37/256G)', 'SKC400S37/256G', 55, '2yr', 'Kingston Solid State Drive', 'Index', '151,20$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000051, 'KINGSTON', 'Kingston SSDNow KC400 512GB 550-530MB/s SSD (SKC400S37/512G)', 'SKC400S37/512G', 53, '2yr', 'Kingston Solid State Drive', 'Index', '235,20$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000052, 'KINGSTON', 'Kingston SSDNow UV400 120GB 550-350MB/s SSD (SUV400S37/120G)', 'SUV400S37/120G', 85, '2yr', 'Kingston Solid State Drive', 'Index', '50,96$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000053, 'KINGSTON', 'Kingston SSDNow UV400 480GB 550-500MB/s SSD (SUV400S37/480G)', 'SUV400S37/480G', 87, '2yr', 'Kingston Solid State Drive', 'Index', '162,40$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000054, 'KINGSTON', 'Kingston SSDNow V300 240GB 450-450MB/s SSD (SV300S37A/240G)', 'SV300S37A/240G', 99, '2yr', 'Kingston Solid State Drive', 'Index', '94,30$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000055, 'KINGSTON', 'Kingston SSDNow V300 480GB 450-450MB/s SSD (SV300S37A/480G)', 'SV300S37A/480G', 74, '2yr', 'Kingston Solid State Drive', 'Index', '173,60$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000057, 'LACIE', 'Lacie Porsche Design 250GB Slim External SSD (LAC9000515)', 'LAC9000515', 60, '2yr', 'Lacie Solid State Drive', 'Nova Fotograf', '122,08$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000059, 'SAMSUNG', 'Samsung 840 Evo 1TB 540-520MB/s SSD (MZ-7TE1T0BW)', 'MZ-7TE1T0BW', 76, '2yr', 'Samsung Solid State Drive', 'Arena', '351,68$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000060, 'SAMSUNG', 'Samsung 850 Evo 1TB 540-520MB/s mSATA SSD (MZ-M5E1T0BW)', 'MZ-M5E1T0BW', 75, '2yr', 'Samsung Solid State Drive', 'Arena', '344,96$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000061, 'SAMSUNG', 'Samsung 850 Evo 1TB 540-520MB/s SSD (MZ-75E1T0BW)', 'MZ-75E1T0BW', 53, '2yr', 'Samsung Solid State Drive', 'Arena', '351,68$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000062, 'SAMSUNG', 'Samsung 850 Evo 250GB 540-520MB/s mSATA SSD (MZ-M5E250BW)', 'MZ-M5E250BW', 97, '2yr', 'Samsung Solid State Drive', 'Arena', '99,12$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000063, 'SAMSUNG', 'Samsung 850 Evo 250GB 540-520MB/s SSD (MZ-75E250BW)', 'MZ-75E250BW', 51, '2yr', 'Samsung Solid State Drive', 'Arena', '97,16$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000064, 'SAMSUNG', 'Samsung 850 Evo 2TB 540-520MB/s SSD (MZ-75E2T0BW)', 'MZ-75E2T0BW', 64, '2yr', 'Samsung Solid State Drive', 'Arena', '683,20$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000065, 'SAMSUNG', 'Samsung 850 Evo 500GB 540-500MB/s M.2 SSD (MZ-N5E500BW)', 'MZ-N5E500BW', 85, '2yr', 'Samsung Solid State Drive', 'Arena', '177,52$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000066, 'SAMSUNG', 'Samsung 850 Evo 500GB 540-520MB/s mSATA SSD (MZ-M5E500BW)', 'MZ-M5E500BW', 53, '2yr', 'Samsung Solid State Drive', 'Arena', '177,52$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000067, 'SAMSUNG', 'Samsung 850 Evo 500GB 540-520MB/s SSD (MZ-75E500BW)', 'MZ-75E500BW', 77, '2yr', 'Samsung Solid State Drive', 'Arena', '178,92$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000068, 'SAMSUNG', 'Samsung 850 Pro 1TB 550-520MB/s SSD (MZ-7KE1T0BW)', 'MZ-7KE1T0BW', 51, '2yr', 'Samsung Solid State Drive', 'Arena', '497,28$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000069, 'SAMSUNG', 'Samsung 850 Pro 256GB 550-520MB/s SSD (MZ-7KE256BW)', 'MZ-7KE256BW', 61, '2yr', 'Samsung Solid State Drive', 'Arena', '145,32$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000070, 'SAMSUNG', 'Samsung 850 Pro 512GB 540-520MB/s SSD (MZ-7KE512BW)', 'MZ-7KE512BW', 58, '2yr', 'Samsung Solid State Drive', 'Arena', '260,40$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000071, 'SAMSUNG', 'Samsung 860 EVO 1TB 550-520MB/s SSD (MZ-76E1T0BW)', 'MZ-76E1T0BW', 73, '2yr', 'Samsung Solid State Drive', 'Arena', '344,96$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000072, 'SAMSUNG', 'Samsung 860 EVO 250GB 550-520MB/s mSATA SSD (MZ-M6E250BW)', 'MZ-M6E250BW', 82, '2yr', 'Samsung Solid State Drive', 'Arena', '99,12$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000073, 'SAMSUNG', 'Samsung 860 EVO 250GB 550-520MB/s SATA M.2 SSD (MZ-N6E250BW)', 'MZ-N6E250BW', 97, '2yr', 'Samsung Solid State Drive', 'Arena', '99,12$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000074, 'SAMSUNG', 'Samsung 860 EVO 250GB 550-520MB/s SSD (MZ-76E250BW)', 'MZ-76E250BW', 80, '2yr', 'Samsung Solid State Drive', 'Arena', '96,32$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000075, 'SAMSUNG', 'Samsung 860 EVO 500GB 550-520MB/s SSD (MZ-76E500BW)', 'MZ-76E500BW', 65, '2yr', 'Samsung Solid State Drive', 'Arena', '177,52$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000076, 'SAMSUNG', 'Samsung 860 PRO 512GB 560-530MB/s SSD (MZ-76P512BW)', 'MZ-76P512BW', 90, '2yr', 'Samsung Solid State Drive', 'Arena', '257,60$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000077, 'SAMSUNG', 'Samsung 960 EVO 1 TB 3200-1900MB/s M.2 PCI-E NWMe 3.0 SSD (MZ-V6E1T0BW)', 'MZ-V6E1T0BW', 50, '2yr', 'Samsung Solid State Drive', 'Arena', '471,52$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000078, 'SAMSUNG', 'Samsung 960 EVO 250GB 3200-1500MB/s M.2 PCI-E NWMe 3.0 SSD (MZ-V6E250BW)', 'MZ-V6E250BW', 90, '2yr', 'Samsung Solid State Drive', 'Arena', '128,80$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000079, 'SAMSUNG', 'Samsung 960 PRO 1TB 3500-2100MB/s M.2 PCI-E NWMe 1.2 SSD (MZ-V6P1T0BW)', 'MZ-V6P1T0BW', 97, '2yr', 'Samsung Solid State Drive', 'Arena', '660,80$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000080, 'SAMSUNG', 'Samsung 960 PRO 2TB 3500-2100MB/s M.2 PCI-E NWMe 1.2 SSD (MZ-V6P2T0BW)', 'MZ-V6P2T0BW', 93, '2yr', 'Samsung Solid State Drive', 'Arena', '1.349,60$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000081, 'SAMSUNG', 'Samsung 960 PRO 512GB 3500-2100MB/s M.2 PCI-E NWMe 1.2 SSD (MZ-V6P512BW)', 'MZ-V6P512BW', 67, '2yr', 'Samsung Solid State Drive', 'Arena', '346,08$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000082, 'SAMSUNG', 'Samsung T3 2TB 450-450MB/s USB3.1 External SSD (MU-PT2T0B/WW)', 'MU-PT2T0B/WW', 77, '2yr', 'Samsung Solid State Drive', 'Arena', '819,84$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000084, 'SANDISK', 'Sandisk Extreme 500 120GB 415-340MB/s USB3.0 External SSD (SDSSDEXT-120G-G25)', 'SDSSDEXT-120G-G25', 65, '2yr', 'Sandisk Solid State Drive', 'Remgsm', '72,80$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000085, 'SANDISK', 'Sandisk Extreme 500 240GB 415-340MB/s USB3.0 External SSD (SDSSDEXT-240G-G25)', 'SDSSDEXT-240G-G25', 98, '2yr', 'Sandisk Solid State Drive', 'Remgsm', '106,40$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000086, 'SANDISK', 'Sandisk Extreme Pro 960GB 550-520MB/s SSD (SDSSDXPS-960G-G25)', 'SDSSDXPS-960G-G25', 87, '2yr', 'Sandisk Solid State Drive', 'Remgsm', '379,68$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000088, 'SANDISK', 'Sandisk Ultra II 240GB 550-500MB/s SSD (SDSSDHII-240G-G25)', 'SDSSDHII-240G-G25', 88, '2yr', 'Sandisk Solid State Drive', 'Remgsm', '93,44$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000090, 'TEAM', 'Team T-Force Cardea 240GB 3000-2400 MB/s m2 NVMe PCIe SSD (TMM2SSDTC240)', 'TMM2SSDTC240', 89, '2yr', 'Team Solid State Drive', 'Akortek', '175,00$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000092, 'TOSHIBA', 'Toshiba A100 240GB 2,5" 550MB-480MB/s SSD (S101Z2400E8)', 'S101Z2400E8', 59, '2yr', 'Toshiba Solid State Drive', 'Tnb Bilgisayar', '89,60$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000093, 'TOSHIBA', 'Toshiba DSK 480GB 2,5" 550MB-520MB/s SSD (HDTS848EZSTA)', 'HDTS848EZSTA', 54, '2yr', 'Toshiba Solid State Drive', 'Tnb Bilgisayar', '179,20$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000094, 'TOSHIBA', 'Toshiba OCZ 960GB 535MB-450MB/s SSD (SDSSDA-960G-G26)', 'SDSSDA-960G-G26', 83, '2yr', 'Toshiba Solid State Drive', 'Tnb Bilgisayar', '298,83$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000095, 'TOSHIBA', 'Toshiba OCZ 240GB 2,5" 555MB-540MB/s Sata 3 SSD Disk (THN-TR20Z2400U8)', 'THN-TR20Z2400U8', 90, '2yr', 'Toshiba Solid State Drive', 'Tnb Bilgisayar', '100,80$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000097, 'WESTERN DIGITAL', 'Western Digital 256GB Black 2050/700MB M.2 2280 Nvme Pci-E SSD (WDS256G1X0C)', 'WDS256G1X0C', 57, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '124,32$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000098, 'WESTERN DIGITAL', 'Western Digital BLUE 1 TB 545/525 MB/s M.2 Sata SSD (WDS100T1B0B)', 'WDS100T1B0B', 77, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '367,36$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000099, 'WESTERN DIGITAL', 'Western Digital Blue 2.5" 250GB SATA3 540/500 SSD (WDS250G1B0A-250G)', 'WDS250G1B0A-250G', 98, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '103,60$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000100, 'WESTERN DIGITAL', 'Western Digital BLUE 250 GB 540/500/s M.2 Sata SSD (WDS250G1B0B)', 'WDS250G1B0B', 74, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '100,80$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000101, 'WESTERN DIGITAL', 'Western Digital Blue 250GB 550-525MB/s SSD Disk (WDS250G2B0A)', 'WDS250G2B0A', 64, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '105,28$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000102, 'WESTERN DIGITAL', 'Western Digital Blue 500GB 550-525MB/s SSD Disk (WDS500G2B0B)', 'WDS500G2B0B', 65, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '204,19$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000103, 'WESTERN DIGITAL', 'Western Digital Blue 500GB 560-530MB/s SSD Disk (WDS500G2B0A)', 'WDS500G2B0A', 54, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '184,58$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000104, 'WESTERN DIGITAL', 'Western Digital Green 120GB 540/430MB/s SSD (WDS120G1G0A)', 'WDS120G1G0A', 55, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '49,28$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000105, 'WESTERN DIGITAL', 'Western Digital Green 120GB 545-465MB/s Series 3D-NAND SSD Disk (WDS120G2G0A)', 'WDS120G2G0A', 63, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '50,96$ + Tax');
INSERT INTO products (pid, brand, name, model_no, quantity, warranty_status, description, distributor, price_usd) VALUES (19000106, 'WESTERN DIGITAL', 'Western Digital Green 240GB 540/430MB/s SSD (WDS240G1G0A)', 'WDS240G1G0A', 63, '2yr', 'Western Digital Solid State Drive', 'Index Bilgisayar', '96,00$ + Tax');
