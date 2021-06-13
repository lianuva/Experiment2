from otree.api import *
import pandas as pd
import json
import numpy as np

doc = """
Main task where participants has to decide between two subjects
"""


class Constants(BaseConstants):
    name_in_url = 'Task'
    players_per_group = None
    num_rounds = 40
    FM = pd.read_csv("_static/Task/FM.csv") #10 trials
    MF = pd.read_csv("_static/Task/MF.csv") #10 trials
    FF = pd.read_csv("_static/Task/FF.csv") #5 trials
    MM = pd.read_csv("_static/Task/MM.csv") #5 trials
    M  = pd.read_csv("_static/Task/2males.csv") #5 trials
    F  = pd.read_csv("_static/Task/2females.csv") #5 trials
    bRequireFS          = True  
    bCheckFocus         = True   

nrcategory = np.random.randint(1, 9,(41,1))

class Subsession(BaseSubsession):
    pass

class Group(BaseGroup):
    pass

class Player(BasePlayer):
    sButtonClick        = models.StringField(blank=True)
    sTimeClick          = models.StringField(blank=True)
    chosen              = models.IntegerField(blank=True)
    category            = models.StringField(blank=True)
    rownr               = models.IntegerField(blank=True)
    iFocusLost          = models.IntegerField(blank=True) #tbv FriendlyChecks
    dFocusLostT         = models.FloatField(blank=True) #tbv FriendlyChecks
    iFullscreenChange   = models.IntegerField(blank=True) #tbv FriendlyChecks

# PAGES
class Task(Page):
    form_model = 'player'
    form_fields = [
        'sButtonClick', 
        'sTimeClick',
        'chosen',
        'category',
        'rownr',
        'iFocusLost',
        'dFocusLostT',
        'iFullscreenChange',
    ]

    @staticmethod
    def js_vars(player: Player):
            if nrcategory[player.round_number] == 1 or nrcategory[player.round_number] == 2:
                x = {
                    "Genderp1"   : Constants.FM["female_gender"].tolist(),
                    "Matrixp1"   : Constants.FM["female_matrix1"].tolist(),
                    "Verbalp1"   : Constants.FM["female_verbal1"].tolist(),
                    "Agep1"      : Constants.FM["female_age"].tolist(),
                    "occupp1"    : Constants.FM["female_occup"].tolist(),
                    "Genderp2"   : Constants.FM["male_gender"].tolist(),
                    "Matrixp2"   : Constants.FM["male_matrix1"].tolist(),
                    "Verbalp2"   : Constants.FM["male_verbal1"].tolist(),
                    "Agep2"      : Constants.FM["male_age"].tolist(),
                    "occupp2"    : Constants.FM["male_occup"].tolist(), 
                }
                data = json.dumps(x)
                length = len(Constants.FM["female_gender"])
                player.category = 'FM'
            elif nrcategory[player.round_number] == 3 or nrcategory[player.round_number] == 4:
                x = {
                    "Genderp1"   : Constants.MF["female_gender"].tolist(),
                    "Matrixp1"   : Constants.MF["female_matrix1"].tolist(),
                    "Verbalp1"   : Constants.MF["female_verbal1"].tolist(),
                    "Agep1"      : Constants.MF["female_age"].tolist(),
                    "occupp1"    : Constants.MF["female_occup"].tolist(),
                    "Genderp2"   : Constants.MF["male_gender"].tolist(),
                    "Matrixp2"   : Constants.MF["male_matrix1"].tolist(),
                    "Verbalp2"   : Constants.MF["male_verbal1"].tolist(),
                    "Agep2"      : Constants.MF["male_age"].tolist(),
                    "occupp2"    : Constants.MF["male_occup"].tolist(), 
                }
                data = json.dumps(x)
                length = len(Constants.FM["female_gender"])
                player.category = 'MF'
            elif nrcategory[player.round_number] == 5:   
                x = {
                    "Genderp1"   : Constants.FF["female_gender"].tolist(),
                    "Matrixp1"   : Constants.FF["female_matrix1"].tolist(),
                    "Verbalp1"   : Constants.FF["female_verbal1"].tolist(),
                    "Agep1"      : Constants.FF["female_age"].tolist(),
                    "occupp1"    : Constants.FF["female_occup"].tolist(),
                    "Genderp2"   : Constants.FF["male_gender"].tolist(),
                    "Matrixp2"   : Constants.FF["male_matrix1"].tolist(),
                    "Verbalp2"   : Constants.FF["male_verbal1"].tolist(),
                    "Agep2"      : Constants.FF["male_age"].tolist(),
                    "occupp2"    : Constants.FF["male_occup"].tolist(), 
                }
                data = json.dumps(x)
                length = len(Constants.FM["female_gender"])
                player.category = 'FF'
            elif nrcategory[player.round_number] == 6:   
                x = {
                    "Genderp1"   : Constants.MM["female_gender"].tolist(),
                    "Matrixp1"   : Constants.MM["female_matrix1"].tolist(),
                    "Verbalp1"   : Constants.MM["female_verbal1"].tolist(),
                    "Agep1"      : Constants.MM["female_age"].tolist(),
                    "occupp1"    : Constants.MM["female_occup"].tolist(),
                    "Genderp2"   : Constants.MM["male_gender"].tolist(),
                    "Matrixp2"   : Constants.MM["male_matrix1"].tolist(),
                    "Verbalp2"   : Constants.MM["male_verbal1"].tolist(),
                    "Agep2"      : Constants.MM["male_age"].tolist(),
                    "occupp2"    : Constants.MM["male_occup"].tolist(), 
                }
                data = json.dumps(x)
                length = len(Constants.FM["female_gender"])
                player.category = 'MM'
            elif nrcategory[player.round_number] == 7:   
                x = {
                    "Genderp1"   : Constants.M["female_gender"].tolist(),
                    "Matrixp1"   : Constants.M["female_matrix1"].tolist(),
                    "Verbalp1"   : Constants.M["female_verbal1"].tolist(),
                    "Agep1"      : Constants.M["female_age"].tolist(),
                    "occupp1"    : Constants.M["female_occup"].tolist(),
                    "Genderp2"   : Constants.M["male_gender"].tolist(),
                    "Matrixp2"   : Constants.M["male_matrix1"].tolist(),
                    "Verbalp2"   : Constants.M["male_verbal1"].tolist(),
                    "Agep2"      : Constants.M["male_age"].tolist(),
                    "occupp2"    : Constants.M["male_occup"].tolist(), 
                }
                data = json.dumps(x)
                length = len(Constants.FM["female_gender"])
                player.category = 'M'
            elif nrcategory[player.round_number] == 8:   
                x = {
                    "Genderp1"   : Constants.F["female_gender"].tolist(),
                    "Matrixp1"   : Constants.F["female_matrix1"].tolist(),
                    "Verbalp1"   : Constants.F["female_verbal1"].tolist(),
                    "Agep1"      : Constants.F["female_age"].tolist(),
                    "occupp1"    : Constants.F["female_occup"].tolist(),
                    "Genderp2"   : Constants.F["male_gender"].tolist(),
                    "Matrixp2"   : Constants.F["male_matrix1"].tolist(),
                    "Verbalp2"   : Constants.F["male_verbal1"].tolist(),
                    "Agep2"      : Constants.F["male_age"].tolist(),
                    "occupp2"    : Constants.F["male_occup"].tolist(), 
                }
                data = json.dumps(x)
                length = len(Constants.FM["female_gender"])
                player.category = 'F'

            return {
                'data'          : data,
                'length'        : length,
                'category'      : player.category,
                'round_number'  : player.round_number,
                'bRequireFS'    : Constants.bRequireFS,
                'bCheckFocus'   : Constants.bCheckFocus,
            }
            
    @staticmethod
    def before_next_page(player, timeout_happened):  
        participant = player.participant
        participant.category = player.category

page_sequence = [Task]
