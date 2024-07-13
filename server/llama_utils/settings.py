from llama_index.core import Settings

def update_settings(llm, embed_model):
    Settings.llm = llm
    Settings.embed_model = embed_model
    Settings.num_output = 10000
    Settings.context_window = 10000