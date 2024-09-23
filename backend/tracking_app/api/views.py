from rest_framework import viewsets
from .models.user import User
from .models.todo import Todo
from .models.post import Post
from .models.comment import Comment
from .models.album import Album
from .models.photo import Photo
from .serializers.user import UserSerializer
from .serializers.todo import TodoSerializer
from .serializers.post import PostSerializer
from .serializers.comment import CommentSerializer
from .serializers.album import AlbumSerializer
from .serializers.photo import PhotoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class AlbumViewSet(viewsets.ModelViewSet):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer