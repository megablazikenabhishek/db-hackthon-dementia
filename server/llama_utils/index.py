from llama_index.core import (
    StorageContext, 
    load_index_from_storage, 
)

def get_index():
    storage_context = StorageContext.from_defaults(persist_dir="./index/")
    index = load_index_from_storage(storage_context)
    return index