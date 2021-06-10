from otree.api import *

doc = """
Instructions
"""

class Constants(BaseConstants):
    name_in_url = 'instructions'
    players_per_group = None
    num_rounds = 1

class Subsession(BaseSubsession):
    pass

class Group(BaseGroup):
    pass

class Player(BasePlayer):
    consent = models.IntegerField(
        choices=[
        [1, 'I would like to participate'],
        ],
        widget=widgets.RadioSelect,
        label="By clicking the button below, you acknowledge that your participation in the study is voluntary, you are over 18 years of age, and that you are aware that you may choose to terminate your participation in the study at any time and for any reason.",
    )
    treatment = models.IntegerField()
    #maximum score each task
    #what treatment

# PAGES
class Welcome(Page):
    form_model = 'player'
    form_fields = ['consent']

class Explanation(Page):
    form_model = 'player'
    form_fields = ['treatment']

    @staticmethod
    def before_next_page(player, timeout_happened):  #before the next round, this is all that i need to do, save this variables in the participant variables
        participant = player.participant
        participant.treatment = player.treatment

class controlquestion(Page):
    pass

page_sequence = [Welcome, Explanation, controlquestion]
