import requests
import random
from googletrans import Translator
from urllib.parse import quote

def get_words():
    # relations = ['syn','spc','par','trg','jjb']
    # keyword = random.choice(relations)
    word = random.choice(['black','big','beautiful','tasty','long','slimy','skinny','fat','rich'])
    url = f'https://api.datamuse.com/words?rel_jja={word}'
    response = requests.get(url)
    json_list = response.json() 
    try:
        alternatives = [json_list[i]['word'] for i in range(4,8)]

    except IndexError:
        url2 = f'https://api.datamuse.com/words?rel_bga={word}'
        response2 = requests.get(url2)
        json_list += response2.json()
        alternatives = [json_list[i]['word'] for i in range(4)]

    #print(alternatives)
    correct_word = random.choice(alternatives)
    alternatives.remove(correct_word)
    alternatives.append(correct_word)
    return correct_word, alternatives

def translate_into(word, language):
    tr = Translator()
    translation = tr.translate(text=word, dest=language, src='en')
    return translation.text, translation.pronunciation

def scrape_images(alternatives):
    image_urls = []
    pixabay_api_url = "https://pixabay.com/api/"
    pixabay_api_key = "43234845-5040b0ec19da52495272d1959"  # Replace with your actual API key

    for word in alternatives:
        params = {
            "key": pixabay_api_key,
            "q": f'{word}',
            "per_page": 3  # Number of images to fetch
        }

        response = requests.get(pixabay_api_url, params=params)

        if response.status_code == 200:
            data = response.json()
            try:
                first_hit = data["hits"][0]["webformatURL"]
                image_urls.append(first_hit)
            except IndexError:
                pass
        else:
            print(f"Error fetching images for '{word}': {response.status_code} {response.text}")
        #random.shuffle(image_urls)
        
    return image_urls




