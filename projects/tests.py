from django.test import TestCase
from .models import Profile, Project, Rating
from django.contrib.auth.models import User

# Create your tests here.
class ProfileTestClass(TestCase):
    def setUp(self):
        self.alice=User(username='Alice')
        self.alice.save()

        self.alice=Profile(user=self.alice, bio="this is an admin bio", profile_pic="https://www.pinterest.com/pin/492649949221163/", contact="Nairobi, Kenya")
        self.alice.save_profile()

    def test_instance(self):
        self.assertTrue(isinstance(self.alice, Profile))

    def tearDown(self):
        User.objects.all().delete()
        Profile.objects.all().delete()

