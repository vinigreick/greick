# Importações necessárias para definir as rotas de URLs
from django.urls import path  # Importa a função path para definir as rotas de URL
from .views import home  # Importa a função de view 'home' do módulo 'views' local
from django.contrib.auth import views as auth_views  # Importa as views de autenticação do Django

from . import views

# Lista de padrões de URL para a aplicação 'core'
urlpatterns = [
    # Define a rota para a página de login
    # Utiliza a view LoginView padrão do Django, especificando o template 'login.html'
    # O nome 'login' é usado para referenciar esta URL em outras partes do código, como templates e views
    path('login/', views.login, name='login'),

    # Define a rota para a raiz da aplicação ('/')
    # Mapeia para a função de view 'home' importada do módulo 'views'
    # Esta rota é nomeada 'home', permitindo sua referência fácil em outras partes do projeto
    path('', home, name='home'),

    path('agendamento/', views.agendamento, name='agendamento'),

    path('servicos/', views.servicos, name='servicos'),
]
