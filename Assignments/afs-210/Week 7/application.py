import matplotlib.pyplot as plt

fig = plt.figure(figsize = (51, 2))

names = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'DC', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconson', 'Wyoming']
scores = [111, 10, 204, 10, 450, 70, 27, 11, 3, 221, 152, 3, 37, 152, 62, 42, 26, 93, 7, 1, 137, 18, 89, 24, 14, 148, 13, 31, 30, 1, 53, 27, 98, 34, 9, 51, 16, 0, 51, 31, 83, 13, 24, 158, 33, 0, 162, 61, 5, 54, 5]
positions = [0,1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

plt.bar(positions, scores, width=0.5)

plt.xticks(positions, names, rotation=90)
plt.ylabel("Active Cases in Thousands")
plt.xlabel("Provice/State")
plt.title("State wide recovery cases of COVID-19 in USA")

plt.show()