from django.shortcuts import render, redirect
from django.http import HttpResponse
from .forms import RegisterForm, CreateProfile
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.views.generic.edit import CreateView
from .models import Profile
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    return render(request, "projects/index.html", {})


def register(request):
    form=RegisterForm()

    if request.method =="POST":
        form=RegisterForm(request.POST)

        if form.is_valid():
            form.save()

            return redirect('loginuser')

    else:
        form=RegisterForm()

    return render(request, "registration/register.html", {"form":form})

def loginUser(request):
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')

        if username and password:
            user=authenticate(username=username, password=password)

            if user is not None:
                login(request, user)

                return redirect('index')

            else:
                messages.error(request, "Username or password is Incorrect")

        else:
            messages.error(request, "Fill out all the fields")

    return render(request, "registration/login.html", {})

def logoutUser(request):
    logout(request)
    return redirect('index')

class CreateProfileView(CreateView):
    model=Profile
    form_class=CreateProfile
    template_name='projects/create-profile.html'

    def form_valid(self, form):
        form.instance.user=self.request.user
        return super().form_valid(form)



