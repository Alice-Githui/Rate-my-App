from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from .forms import RegisterForm, CreateProfile, UploadNewProject
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.views.generic.edit import CreateView
from .models import Profile, Project, Rating
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    projects=Project.objects.all()
    return render(request, "projects/index.html", {"projects":projects})


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

@login_required(login_url='loginuser')
def uploadProject(request):
    form=UploadNewProject()
    current_user=request.user

    if request.method =="POST":
        form=UploadNewProject(request.POST, request.FILES)
        if form.is_valid():
            project=form.save(commit=False)
            project.profile=current_user
            project.save()

        return redirect('index')

    else:
        form=UploadNewProject()

    return render(request, 'projects/uploadproject.html', {"form":form})

def viewProject(request, pk):
    project=Project.objects.filter(id=pk)
    current_user=request.user

    return render(request, 'projects/viewproject.html', {"project":project})

def viewUserProfile(request, pk):
    user=Profile.objects.filter(user_id=pk)
    projects=Project.objects.filter(profile_id=pk)

    return render(request, "projects/viewuserprofile.html", {"user":user, "projects":projects})

def searchProject(request):

    if 'project' in request.GET and request.GET['project']:
        search_term=request.GET.get('project')
        searched_projects=Project.search_by_title(search_term)
        message=f"{search_term}"

        return render(request, "projects/search.html", {"projects":searched_projects, "message":message})
    else:
        message="You have not searched for any project"
        return render(request, "projects/search")

def rateProject(request, pk):
    projects=Project.objects.filter(id=pk)
    return render(request, 'projects/rateprojects.html', {"projects":projects})

def rateOneProject(request,pk):
    if request.method=="POST": 
        # el_id=request.POST.get('el_id')   
        val=request.POST.get('val')
        project=Project.objects.get(id=pk)
        project.design_rate=val
        project.save()

        return JsonResponse({'success':'true', 'design-rate':val}, safe=False)
    else:
        return JsonResponse({'success':'false'})



    
class CreateProfileView(CreateView):
    model=Profile
    form_class=CreateProfile
    template_name='projects/create-profile.html'

    def form_valid(self, form):
        form.instance.user=self.request.user
        return super().form_valid(form)



