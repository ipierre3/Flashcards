from django.urls import path
from . import views

urlpatterns = [
    path('', views.cards_list),
    path('<int:pk>/', views.card_detail)
]