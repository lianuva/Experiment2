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
    phone1 = models.StringField(blank = True) #input field for email
    phone = models.StringField(blank=True) #0 if no phone, 1 if phone
    consent = models.IntegerField(
        choices=[
        [1, 'I would like to participate'],
        ],
        widget=widgets.RadioSelect,
        label="By clicking the button below, you acknowledge that your participation in the study is voluntary, you are over 18 years of age, and that you are aware that you may choose to terminate your participation in the study at any time and for any reason.",
    )
    consentDutch = models.IntegerField(
        choices=[
        [1, 'Ik wil graag meedoen aan dit onderzoek'],
        ],
        widget=widgets.RadioSelect,
        label="Door op onderstaande knop te drukken, bevestig je dat jou participatie in dit onderzoek vrijwillig is, dat je ouder bent dan 18 jaar en dat je je er van bewust bent dat je jouw participatie op ieder moment stop kan zetten zonder daar een reden voor hoeven te geven.",
    )
    treatment = models.IntegerField(blank = True)
    language  = models.StringField(blank = True)

# PAGES
class Language(Page):
    form_model = 'player'
    form_fields = ['language','phone', 'phone1']

    @staticmethod
    def before_next_page(player, timeout_happened):  
        participant             = player.participant
        participant.language    = player.language

class exitexperiment(Page):
    pass 

    @staticmethod
    def is_displayed(player: Player):
        return player.phone == '1'
    
class Welcome(Page):
    form_model = 'player'
    form_fields = ['consent']

    @staticmethod
    def is_displayed(player: Player):
        return player.participant.language == 'English'

class WelcomeDutch(Page):
    form_model = 'player'
    form_fields = ['consentDutch']

    @staticmethod
    def is_displayed(player: Player):
        return player.participant.language == 'Dutch'

class Explanation(Page):
    form_model = 'player'
    form_fields = ['treatment']

    @staticmethod
    def before_next_page(player, timeout_happened):  
        participant = player.participant
        participant.treatment = player.treatment

    @staticmethod
    def is_displayed(player: Player):
        return player.participant.language == 'English'

class ExplanationDutch(Page):
    form_model = 'player'
    form_fields = ['treatment']

    @staticmethod
    def before_next_page(player, timeout_happened):  
        participant = player.participant
        participant.treatment = player.treatment
    
    @staticmethod
    def is_displayed(player: Player):
        return player.participant.language == 'Dutch'

class controlquestion(Page):
    @staticmethod
    def is_displayed(player: Player):
        return player.participant.language == 'English'

class controlquestionDutch(Page):
    @staticmethod
    def is_displayed(player: Player):
        return player.participant.language == 'Dutch'

page_sequence = [Language, exitexperiment, Welcome, WelcomeDutch, Explanation, ExplanationDutch, controlquestion, controlquestionDutch]
