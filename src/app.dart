import 'package:flutter/material.dart';
import './components/post.dart';
import './components/blog_post.dart';
import './components/blog_post_create_form.dart';

class App extends StatefulWidget {
  @override
  _AppState createState() => _AppState();
}

class _AppState extends State<App> {
  final posts = <Post>[];

  addPost(Post post) => setState(() => posts.add(post));

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      ...posts.map((p) => BlogPost(p)),
      BlogPostCreateForm(posts, addPost),
    ]);
  }
}
