# Save JSON

import os
import json
import datetime

data = {}
data['people'] = []
data['people'].append({
    'name': 'Scott',
    'time': datetime.datetime.now().isoformat()
})

print(json.dump(data))

# os.chdir(r'../node/pi-firmware/node/build/data/')

# with open('envirophat.json', 'w') as outfile:
#     json.dump(data, outfile)