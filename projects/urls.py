from django.urls import path
from . import views
from .views import CreateProfileView


urlpatterns=[
    path('', views.index, name="index"),
    path('register/', views.register, name="registeruser"),
    path('login/', views.loginUser, name="loginuser"),
    path('logout/', views.logoutUser, name="logout"),
    path('createprofile/', CreateProfileView.as_view(), name="createprofile"),
]