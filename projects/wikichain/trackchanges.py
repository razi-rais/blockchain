import json
import pyodbc
import requests
from sseclient import SSEClient

blockchain_api_url = "http://localhost:8081/"
items = {}
def get_wiki_changes(wiki_recent_changes_url = "https://stream.wikimedia.org/v2/stream/recentchange"):
    messages = SSEClient(wiki_recent_changes_url)
    for msg in messages:
        str = msg.data
        if  len(str.strip()) >0: 
            #print(str)
            json_obj = json.loads(str)
            if len(json_obj) > 0:
                 article_id = get_articleID_by_uri(json_obj['meta']['uri'])
                 if(check_conditions(article_id, json_obj['type'],json_obj['bot'])):
                    # type is edit | log | categorize 
                    print(json_obj)
                    items['id']=  article_id
                    items['request_id']=  json_obj['meta']['request_id']
                    items['title']=  json_obj['title']
                    items['comment']=  json_obj['comment']
                    items['revision_old']=  json_obj['revision']['old']
                    items['revision_new']=  json_obj['revision']['new']
                    items['timestamp']=  json_obj['timestamp']
                    items['change_type']=  json_obj['type']
                    items['user']=  json_obj['user']
                    items['uri']= json_obj['meta']['uri']
                    json_data = json.dumps(items)
                    result = requests.post(blockchain_api_url,json=json_data)
    return;

def check_conditions(article_id, article_type, isBot):

    if (len(article_id) > 0 and article_type == "edit" and isBot == False):
          return True 

    return False

def get_articleID_by_uri(uri):

    cnxn = get_sqlcon()
    cursor = cnxn.cursor()
    cursor.execute("SELECT  [ArticleID] FROM [Articles] WHERE  [Url] = '"+ uri+"'")
    row = cursor.fetchone()
    article_id = ""
    
    while row:
      article_id = str(row[0])
      row = cursor.fetchone()
        
    return article_id

def get_sqlcon():
    server = 'rz-sql.database.windows.net'
    database = 'rzsqldb'
    username = 'super'
    password = 'Password~2017'
    driver= '{ODBC Driver 13 for SQL Server}'
    conn = pyodbc.connect('DRIVER='+driver+';PORT=1433;SERVER='+server+';PORT=1443;DATABASE='+database+';UID='+username+';PWD='+ password)
    
    return conn;
get_wiki_changes()