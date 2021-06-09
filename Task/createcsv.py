import csv
import pandas as pd
  
df = pd.read_csv("_static/Task/Dataexperiment1.csv")    
gender = df["player.gender"]
fieldnames = ['female_gender', 'female_id', 'female_matrix1', 'female_verbal1', 'male_gender', 'male_id', 'male_matrix1', 'male_verbal1']

n = 0
m = 0

for x in gender:
    n = n + 1
    
    if x == 1: #male
        male_id = df["participant.id_in_session"][n-1]
        male_matrix1 = df["player.correcttables"][n-1]
        male_verbal1 = df["player.score"][n-1]
        male_gender = df["player.gender"][n-1]
        
        for y in gender:
            
            if y == 2: #female
                
                female_id = df["participant.id_in_session"][2]  #!how to indicate?!
                female_matrix1 = df["player.correcttables"][2]
                female_verbal1 = df["player.score"][2]
                female_gender = df["player.gender"][2]

                if all({1: (x == 1), 2: (y == 2), 3: (female_matrix1 > male_matrix1), 4:(female_verbal1 > male_verbal1)}):
                    
                    with open('FF.csv', 'w', newline='') as file:
                        writer = csv.writer(file) 
                        writer.writerow([female_gender, female_id, female_matrix1, female_verbal1, male_gender, male_id, male_matrix1, male_verbal1])        
