import csv
import pandas as pd

df = pd.read_csv("_static/Task/FemaleDataexperiment1.csv")   
dm = pd.read_csv("_static/Task/MaleDataexperiment1.csv")       

# with open('_static/Task/Dataexperiment1.csv', 'w', newline='') as file:

genderfemale = df["player.gender"]
female_matrix1 = df["player.correcttables"]
female_verbal1 = df["player.score"]

gendermale = dm["player.gender"]
male_matrix1 = dm["player.correcttables"]
male_verbal1 = dm["player.score"]

# print(gender == male)

for female in genderfemale:
        for male in gendermale:
                with open('FF.csv', 'w', newline='') as file:
                    if female_matrix1 > male_matrix1 and female_verbal1 > male_verbal1:
                        writer = csv.writer(file) 
                        writer.writerow([genderfemale, female_matrix1, female_verbal1, gendermale, male_matrix1, male_verbal1])

# for female in genderfemale:
#         for male in gendermale:
#                 print (female_matrix1)
#                 if female_matrix1 > male_matrix1 and female_verbal1 > male_verbal1:
#                     with open('FF.csv', 'w', newline='') as file:
#                         writer = csv.writer(file) 
#                         writer.writerow([genderfemale, female.matrix1, female.verbal1, gendermale, male.matrix1, male.verbal1])



