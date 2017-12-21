from azure.storage.table import TableService, Entity
import json

table_service = TableService(account_name='', account_key='')
table_name = "wiki"
partition_key = "wiki"
row_key = "wiki-test"
value = ""

def save_item():
    item = {'PartitionKey':partition_key, 'RowKey': row_key, 'json': value}
    table_service.insert_or_replace_entity(table_name, item)
    
    return;

def get_items():
    item = table_service.get_entity(table_name,partition_key, row_key)
    print(item.json)
    
    return;

save_item()
get_items()