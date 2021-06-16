from otree.api import *
import pandas as pd
import json
import numpy as np
import random

doc = """
Instructionsround2
"""


class Constants(BaseConstants):
    name_in_url = 'InstructionsTask2'
    players_per_group = None
    num_rounds = 1 

class Subsession(BaseSubsession):
    pass

class Group(BaseGroup):
    pass

class Player(BasePlayer):
    pass

# PAGES
class Instructionsround2(Page):
    pass

class controlquestionstask2(Page):
    @staticmethod
    def is_displayed(player: Player):
         return player.participant.language == 'English'

class controlquestionstask2Dutch(Page):
    @staticmethod
    def is_displayed(player: Player):
         return player.participant.language == 'Dutch'

page_sequence = [Instructionsround2, controlquestionstask2, controlquestionstask2Dutch]
