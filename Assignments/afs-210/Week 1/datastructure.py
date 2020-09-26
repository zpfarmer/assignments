from enum import Enum

class Country(Enum):
    Afghanistan = 93
    Albania = 355
    Algeria = 213
    Andorra = 376
    Angola = 244
    Antarctica = 672

print({i.name: i.value for i in Country})


#print(Country)

