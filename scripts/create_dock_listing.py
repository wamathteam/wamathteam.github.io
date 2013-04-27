#!/usr/bin/env python

import os
import re
files = os.listdir("../documents")
math_meet_regex = re.compile("^([0-9]{4})([0-9]{2})_mml\.pdf$")
years = [3, 4, 5, 6, 7, 8, 10]
months = ["10", "11", "12", "01", "02", "03"]
page_html = """
<h1>Archived Meets</h1>
<table>
<tr><td>Year</td><td colspan="6"> | Meet</td></tr>
"""

for year in years:
    page_html += "<tr>\n<td>" + "%0*d" % (2, year) + " - " + "%0*d" % (2, year + 1) + "<td>\n"
    for mIndex in range(len(months)):
        date_format = ""
        if mIndex < 3:
            date_format += str(2000 + year)
        else:
            date_format += str(2000 + year + 1)
        date_format += months[mIndex] + "_mml.pdf"
        page_html += "<td><a href='documents/" + date_format + "'>Meet " + str(mIndex + 1) + "</a></td>\n"
    page_html += "</tr>\n"

page_html += """</table>
<h1>Other Documents</h1>
<ul>"""
mapping = open("docinfo.txt", "r")
for line in mapping:
    filemap = line.split(":")
    page_html += "<li>\n<h2>" + filemap[1] + "</h2>\n"
    page_html += "<a href='documents/" + filemap[0] + "'>Link</a>\n</li>\n"
page_html += "</ul>"
file = open("../pages/documents.html", "w+b")
file.write(page_html)
    
