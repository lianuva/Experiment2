from otree.api import *

c = Currency

doc = """
Your app description
"""


class Constants(BaseConstants):
    name_in_url = 'check_VT'
    players_per_group = None
    num_rounds = 10


class Subsession(BaseSubsession):
    pass


class Group(BaseGroup):
    pass


class Player(BasePlayer):
    sButtonClick        = models.StringField(blank=True)
    sTimeClick          = models.StringField(blank=True)
    chosen              = models.IntegerField(blank=True)

    # iFocusLost          = models.IntegerField(blank=True) tbv FriendlyChecks
    # dFocusLostT         = models.FloatField(blank=True) tbv FriendlyChecks
    # iFullscreenChange   = models.IntegerField(blank=True) tbv FriendlyChecks


# PAGES
class Task(Page):
    form_model = 'player'
    form_fields = [
        'sButtonClick', 
        'sTimeClick',
        'chosen',
    ]

page_sequence = [Task]
