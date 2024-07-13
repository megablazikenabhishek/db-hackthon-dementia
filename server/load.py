from langchain.embeddings.huggingface import HuggingFaceEmbeddings
from llama_index.embeddings.langchain import LangchainEmbedding
from llama_index.core import Settings, VectorStoreIndex
from llama_parse import LlamaParse
import nest_asyncio
import os

nest_asyncio.apply()

os.environ["OPENAI_API_KEY"] = "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"

embed_model = LangchainEmbedding(HuggingFaceEmbeddings(model_name='sentence-transformers/all-MiniLM-L6-v2'))
Settings.embed_model = embed_model


parser = LlamaParse(
    api_key="llx-pgIFXHhr2kRSK8xLFQ9JquwLRzicA8DErYZksJYZa6tcqQz1",  
    result_type="markdown",
    verbose=True,
)

documents = parser.load_data("./data/dementia-uk-specialist-admiral-nurses.pdf")

# reader = SimpleDirectoryReader(
#     input_dir="./data/",
#     recursive=True,
# )

# documents = reader.load_data()

index = VectorStoreIndex.from_documents(
    documents=documents
)

index.storage_context.persist("./index")