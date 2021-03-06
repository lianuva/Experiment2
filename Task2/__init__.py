from otree.api import *
import pandas as pd
import json
import numpy as np
import random

doc = """
Main task where participant has to decide between two subjects
"""


class Constants(BaseConstants):
    name_in_url = 'Task2'
    players_per_group = None
    num_rounds = 20
    FM = pd.read_csv("_static/Task/FM.csv") # 8 trials per round
    MF = pd.read_csv("_static/Task/MF.csv") # 8 trials per round
    FF = pd.read_csv("_static/Task/FF.csv") # 1 trial per round
    MM = pd.read_csv("_static/Task/MM.csv") # 1 trial per round
    M  = pd.read_csv("_static/Task/2males.csv") # 1 trial per round
    F  = pd.read_csv("_static/Task/2females.csv") # 1 trial per round
    bRequireFS          = True  
    bCheckFocus         = True   

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
    randomvar           = models.IntegerField(blank=True) #if 1, normal order, if 2, reverse order of csv
    iFocusLost          = models.IntegerField(blank=True) #tbv FriendlyChecks
    dFocusLostT         = models.FloatField(blank=True) #tbv FriendlyChecks
    iFullscreenChange   = models.IntegerField(blank=True) #tbv FriendlyChecks


def get_string_category(player):
    nrcategory = player.participant.categorystring
    return nrcategory

def get_string_rownrstring(player):
    rownrstring = player.participant.rownrstring
    return rownrstring

# PAGES
class Task2(Page):
    form_model = 'player'
    form_fields = [
        'sButtonClick', 
        'sTimeClick',
        'chosen',
        'category',
        'rownr',
        'randomvar',
        'iFocusLost',
        'dFocusLostT',
        'iFullscreenChange',
    ]

    @staticmethod
    def js_vars(player: Player):
            nrcategory = get_string_category(player)
            rownrstring = get_string_rownrstring(player)
            if nrcategory[player.round_number-1] == 'FM':
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
                player.category = nrcategory[player.round_number-1]
                player.rownr = (rownrstring[player.round_number-1] +2)
            elif nrcategory[player.round_number-1] == 'MF':
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
                player.category = nrcategory[player.round_number-1]
                player.rownr = (rownrstring[player.round_number-1] +2)
            elif nrcategory[player.round_number-1] == 'FF':   
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
                player.category = nrcategory[player.round_number-1]
                player.rownr = (rownrstring[player.round_number-1] +2)
            elif nrcategory[player.round_number-1] == 'MM':   
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
                player.category = nrcategory[player.round_number-1]
                player.rownr = (rownrstring[player.round_number-1] +2)
            elif nrcategory[player.round_number-1] == 'M':   
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
                player.category = nrcategory[player.round_number-1]
                player.rownr = (rownrstring[player.round_number-1] +2)
            elif nrcategory[player.round_number-1] == 'F':   
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
                player.category = nrcategory[player.round_number-1]
                player.rownr = (rownrstring[player.round_number-1] +2)
            return {
                'data'          : data,
                'rownr'         : player.rownr,
                'category'      : player.category,
                'round_number'  : player.round_number,
                'bRequireFS'    : Constants.bRequireFS,
                'bCheckFocus'   : Constants.bCheckFocus,
            }
            
    @staticmethod
    def error_message(player, values):
        if len(values['sButtonClick']) == 0 :
            if player.participant.language == 'English':
                return 'Please hover over at least 1 button to reveal information (scroll down if you want to read the instructions again)'
            elif player.participant.language == 'Dutch':
                return 'Beweeg je muis over een vakje om de informatie te onthullen (scroll naar beneden als je de instructies opnieuw wilt lezen)'

page_sequence = [Task2]
