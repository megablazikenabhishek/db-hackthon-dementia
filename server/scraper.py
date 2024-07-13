import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def fetch_pdf_links_from_website(url):
    # Set a user-agent header
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    # Send a GET request to the website
    response = requests.get(url, headers=headers)
    
    # Check if the request was successful
    if response.status_code == 200:
        print("Successfully retrieved the website content.")
        # Parse the HTML content using BeautifulSoup
        soup = BeautifulSoup(response.content, "html.parser")
        
        # Find all the <a> tags with href attribute containing ".pdf"
        pdf_links = []
        for a_tag in soup.find_all("a", href=True):
            if ".pdf" in a_tag["href"]:
                print(a_tag["href"])
                pdf_links.append({
                    "text": a_tag.text,
                    "href": urljoin(url, a_tag["href"])
                })
        return pdf_links
    else:
        print("Failed to retrieve the website content.")
        
def download_pdf(pdf_link, save_path):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    # Send a GET request to the PDF link
    response = requests.get(pdf_link, headers=headers)
    print(response.status_code)
    # Check if the request was successfuls
    if response.status_code == 200:
        # Save the PDF content to a file
        with open(save_path, 'wb') as f:
            f.write(response.content)
    else:
        print("Failed to download the PDF file.")
        
def scrape_data():
    pdf_links = fetch_pdf_links_from_website("https://www.dementiauk.org/information-and-support/resources/our-leaflets/")
    print(pdf_links)
    for pdf_link in pdf_links:
        download_pdf(pdf_link["href"], f"./data/{pdf_link['text']}.pdf")
        
scrape_data()