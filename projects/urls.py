from django.urls import path
from . import views
from .views import CreateProfileView


urlpatterns=[
    path('', views.index, name="index"),
    path('register/', views.register, name="registeruser"),
    path('login/', views.loginUser, name="loginuser"),
    path('logout/', views.logoutUser, name="logout"),
    path('createprofile/', CreateProfileView.as_view(), name="createprofile"),
    path('uploadproject/', views.uploadProject, name="uploadproject"),
    path('viewproject/<int:pk>/', views.viewProject, name="viewproject"),
    path('viewuserprofile/<int:pk>', views.viewUserProfile, name="viewuserprofile"),
    path('searchprojects/', views.searchProject, name="search_results"),
    path('rateproject/<int:pk>/', views.rateProject, name="rateproject"),
    path('rateoneproject/', views.rateOneProject, name="rateoneproject"),
    path('rateuseproject/', views.rateUseProject, name="rateuseproject"),
    path('ratecontentproject/', views.rateContentProject, name="ratecontentproject"),
]