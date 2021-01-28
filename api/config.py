#!/usr/bin/python
# ^-- Tells the shell what interpreter we want the script to execute
# https://docs.python.org/3/library/configparser.html
# https://www.geeksforgeeks.org/postgresql-connect-to-postgresql-database-server-in-python/
# https://codersdiaries.com/blog/flask-project-structure

from configparser import ConfigParser   # Reads .ini parameters


def config(filename='database.ini', section='postgresql'):
    # DB .ini parameters utility method
    parser = ConfigParser()
    
    # read config file
    parser.read(filename)

    # get section, default to postgresql
    # check for keys in the .ini file
    # use the for loop to insert each key pair into db
    db = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0]] = param[1]
    else:
        raise Exception('Section {0} not found in the {1} file'.format(section, filename))

    # return a db object with db, passweord, port, etc...
    return db