from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.collections_list),
    path('<int:pk>/', views.collection_detail),
    path('<int:cpk>/cards/', include('cards_app.urls'))
]