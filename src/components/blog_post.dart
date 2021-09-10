import 'package:flutter/material.dart';
import './components/blog_post';
import './components/blog_post_create_form';

class BlogPost extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      ...posts.map(BlogPost),
      BlogPostCreateForm(posts, addPost),
    ]);
  }
}
