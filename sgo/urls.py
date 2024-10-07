# Importação dos módulos necessários para configurar as URLs.
from django.contrib import admin  # Módulo do admin do Django.
from django.urls import path, include  # Funções para definir caminhos e incluir outras configurações de URL.
from django.shortcuts import redirect  # Função para realizar redirecionamentos.

# Documentação e exemplos de como usar as views baseadas em função e classe, e como incluir outras configurações de URL.
"""
URL configuration for sgo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# Lista de padrões de URL para o projeto sgo.
urlpatterns = [
    # Define a URL 'admin/' que é tratada pelo site de administração do Django.
    path('admin/', admin.site.urls),

    # Define a URL raiz ('') para redirecionar automaticamente para a página de login.
    # Usa uma função lambda para redirecionar, sem necessidade de criar uma view separada.
    path('', lambda request: redirect('home/'), name='root_redirect'),

    # Inclui as URLs padrões de autenticação do Django sob o caminho 'accounts/'.
    # Isso abrange URLs para login, logout, alteração de senha, etc.
    path('accounts/', include('django.contrib.auth.urls')),

    # Inclui as URLs da aplicação 'core', acessíveis sob o caminho 'home/'.
    # O arquivo 'core.urls' deve definir suas próprias URLs específicas da aplicação.
    path('home/', include('core.urls')),
  
    
]
