import pandas as pd

# Načtení dat z CSV souboru
data = pd.read_csv('amazon_prime_users.csv')

# Funkce pro převedení data na ISO formát
def convert_to_iso(date_str):
    return pd.to_datetime(date_str).isoformat()

# Funkce pro převod čárkou odděleného řetězce na seznam
def convert_to_list(comma_separated_str):
    return (comma_separated_str.split(', '))

# Úprava struktury dat
data['Date_of_Birth'] = data['Date of Birth'].apply(convert_to_iso)
data['Membership_Start_Date'] = data['Membership Start Date'].apply(convert_to_iso)
data['Membership_End_Date'] = data['Membership End Date'].apply(convert_to_iso)

# Převod čárkou oddělených hodnot na seznamy
data['Purchase_History'] = data['Purchase History'].apply(convert_to_list)
data['Favorite_Genres'] = data['Favorite Genres'].apply(convert_to_list)
data['Devices_Used'] = data['Devices Used'].apply(convert_to_list)

# Převod názvů sloupců na formát vhodný pro MongoDB
data.columns = [col.replace(' ', '_') for col in data.columns]

# Kontrola a odstranění duplicitních názvů sloupců
data = data.loc[:,~data.columns.duplicated()]

# Export dat do JSON formátu
data.to_json('amazon_prime_users.json', orient='records',date_format='iso')
