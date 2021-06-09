import csv
import pandas as pd
import numpy as np
from numpy import savetxt
  
df = pd.read_csv("_static/Task/Dataexperiment1.csv")    
gender = df["player.gender"]
# fieldnames = ['female_gender', 'female_id', 'female_matrix1', 'female_verbal1', 'male_gender', 'male_id', 'male_matrix1', 'male_verbal1']

arr1 = np.empty((0,12), int)
arr2 = np.empty((0,12), int)
arr3 = np.empty((0,12), int)
arr4 = np.empty((0,12), int)
# arr5 = np.empty((0,12), int)
# arr6 = np.empty((0,12), int)

for x in range(len(gender)):
    # print(gender[2])
    if gender[x] == 1: #male
        
        male_id         = df["participant.id_in_session"][x]
        male_matrix1    = df["player.correcttables"][x]
        male_verbal1    = df["player.score"][x]
        male_gender     = df["player.gender"][x]
        male_age        = df["player.age"][x]
        male_occup      = df["player.occupation"][x]

        for y in range(len(gender)):
            
            if gender[y] == 2: #female
                
                female_id       = df["participant.id_in_session"][y]
                female_matrix1  = df["player.correcttables"][y]
                female_verbal1  = df["player.score"][y]
                female_gender   = df["player.gender"][y]
                female_age      = df["player.age"][y]
                female_occup    = df["player.occupation"][y]

                if (gender[x] == 1) and (gender[y] == 2) and (female_matrix1 > male_matrix1) and (female_verbal1 > male_verbal1):
                    #FF = 1 male, 1 female, female better at both tasks
                    row = np.array([female_gender, female_id, female_matrix1, female_verbal1, female_age, female_occup, male_gender, male_id, male_matrix1, male_verbal1, male_age, male_occup])  
                    arr1 = np.append(arr1, np.array([row]), axis=0)
                    print(arr1)
                elif (gender[x] == 1) and (gender[y] == 2) and (male_matrix1 > female_matrix1) and (male_verbal1 > female_verbal1):
                    #MM = 1 male, 1 female, male better at both tasks
                    row = np.array([female_gender, female_id, female_matrix1, female_verbal1, female_age, female_occup, male_gender, male_id, male_matrix1, male_verbal1, male_age, male_occup])  
                    arr2 = np.append(arr2, np.array([row]), axis=0)
                    print(arr2)
                elif (gender[x] == 1) and (gender[y] == 2) and (female_matrix1 > male_matrix1) and (male_verbal1 > female_verbal1):
                    #FM = #1 male, 1 female, female better at math, male better at verbal
                    row = np.array([female_gender, female_id, female_matrix1, female_verbal1, female_age, female_occup, male_gender, male_id, male_matrix1, male_verbal1, male_age, male_occup])  
                    arr3 = np.append(arr3, np.array([row]), axis=0)
                    print(arr3)
                elif (gender[x] == 1) and (gender[y] == 2) and (male_matrix1 > female_matrix1) and (female_verbal1 > male_verbal1):
                    #MF = #1 male, 1 female, male better at math, female better at verbal
                    row = np.array([female_gender, female_id, female_matrix1, female_verbal1, female_age, female_occup, male_gender, male_id, male_matrix1, male_verbal1, male_age, male_occup])  
                    arr4 = np.append(arr4, np.array([row]), axis=0)
                    print(arr4)
                # if (gender[x] == 1) and (gender[y] == 1) and (female_matrix1 > male_matrix1) and (male_verbal1 > female_verbal1):
                #     #FF = 1 male, 1 female, female better at both tasks
                #     row = np.array([female_gender, female_id, female_matrix1, female_verbal1, female_age, female_occup, male_gender, male_id, male_matrix1, male_verbal1, male_age, male_occup])  
                #     arr5 = np.append(arr5, np.array([row]), axis=0)
                #     print(arr5)
                # elif (gender[x] == 2) and (gender[y] == 2) and (male_matrix1 > female_matrix1) and (female_verbal1 > male_verbal1):
                #     #FF = 1 male, 1 female, female better at both tasks
                #     row = np.array([female_gender, female_id, female_matrix1, female_verbal1, female_age, female_occup, male_gender, male_id, male_matrix1, male_verbal1, male_age, male_occup])  
                #     arr6 = np.append(arr6, np.array([row]), axis=0)
                #     print(arr6)
                    
savetxt('FF.csv', arr1, delimiter=',', fmt='%d')
savetxt('MM.csv', arr2, delimiter=',', fmt='%d')
savetxt('FM.csv', arr3, delimiter=',', fmt='%d')
savetxt('MF.csv', arr4, delimiter=',', fmt='%d')
# savetxt('2males.csv', arr5, delimiter=',', fmt='%d')
# savetxt('2females.csv', arr6, delimiter=',', fmt='%d')

