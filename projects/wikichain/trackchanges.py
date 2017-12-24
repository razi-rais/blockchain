import json
# Install sseclient module if needed using command below
# PS C:\Program Files\Python36> .\python.exe -m pip install sseclient
from sseclient import SSEClient

def get_wiki_changes(wiki_recent_changes_url = "https://stream.wikimedia.org/v2/stream/recentchange"):
    messages = SSEClient(wiki_recent_changes_url)
    for msg in messages:
        str = msg.data
        if  len(str.strip()) >0: 
            print(str)
            json_obj = json.loads(str)
            if len(json_obj) > 0:
                 if( json_obj['bot'] == False):
                    # Check for wiki id or uri
					# type is edit | log | categorize 
                    print(json_obj)
    return;

get_wiki_changes()