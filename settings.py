from os import environ

SESSION_CONFIGS = [
    dict(
        name='Thesis_Lian', 
        app_sequence=['Instructions','Task1', 'Instructionstask2', 'Task2', 'Results'],
        num_demo_participants=1),
]

ROOMS = [
    dict(
        name='Thesisexperiment2',
        display_name='Thesisexperiment2',
        # participant_label_file='_rooms/labels.txt',
        # use_secure_urls=True
    ),
]

# if you set a property in SESSION_CONFIG_DEFAULTS, it will be inherited by all configs
# in SESSION_CONFIGS, except those that explicitly override it.
# the session config can be accessed from methods in your apps as self.session.config,
# e.g. self.session.config['participation_fee']

SESSION_CONFIG_DEFAULTS = dict(real_world_currency_per_point=1.00, participation_fee=0.00, doc="")

PARTICIPANT_FIELDS = ['treatment', 'category', 'categorystring', 'rownrstring', 'language', 'data']

# ISO-639 code
# for example: de, fr, ja, ko, zh-hans
LANGUAGE_CODE = 'en'

# e.g. EUR, GBP, CNY, JPY
REAL_WORLD_CURRENCY_CODE = 'USD'
USE_POINTS = False

ADMIN_USERNAME = 'admin'
# for security, best to set admin password in an environment variable
ADMIN_PASSWORD = environ.get('OTREE_ADMIN_PASSWORD')

DEMO_PAGE_INTRO_HTML = """ """

SECRET_KEY = '4387860144726'

# if an app is included in SESSION_CONFIGS, you don't need to list it here
INSTALLED_APPS = ['otree']

# PARTICIPANT_FIELDS = ['correcttables', 'correcttables2', 'score', 'score2', 'verbalpayoff', 'verbalpayoff2', 'apptext']

extend_existing=True