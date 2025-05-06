import print as p
import json

#TODO - define display implementation specifics

def index():
    book_list = p.get_book_list("tbr.txt")
    return book_list

def display():
    p.print_books("tbr.txt")

def display_completed():
    book_list = index()
    p.get_completed(book_list)

#TODO - display by alphabet

def display_alpha():
    book_list = index()
    p.sort_books_alphabet(book_list)

#TODO - send display in json

def display_json():
    book_list = index()
    return json.dumps(book_list)