#!/usr/bin/env python

import io
import sys
from icrawler.builtin import GoogleImageCrawler

with io.open(sys.argv[1], 'r', encoding='utf-8') as f: # read the whole file into a list
    content = f.readlines()

content = [x.strip() for x in content] # remove newlines
content = list(filter(None, content)) # remove empty strings

for i in range(len(content)):
    google_crawler = GoogleImageCrawler(parser_threads=2, downloader_threads=4,
                                    storage={'root_dir': content[i]})
    google_crawler.crawl(keyword=content[i], max_num=3,
                     min_size=(200,200), max_size=None)
