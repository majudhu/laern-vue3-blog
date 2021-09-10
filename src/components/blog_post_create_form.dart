import 'package:flutter/material.dart';
import './post.dart';

class BlogPostCreateForm extends StatefulWidget {
  final List<Post> posts;
  final Function(Post) addPost;

  BlogPostCreateForm(this.posts, this.addPost);

  @override
  _BlogPostCreateFormState createState() => _BlogPostCreateFormState();
}

class _BlogPostCreateFormState extends State<BlogPostCreateForm> {
  String title = "";
  String text = "";
  String image = "";
  String url = "";

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      TextField(
          decoration: InputDecoration(label: Text("Title")),
          onChanged: (v) => {title = v}),
      TextField(
          decoration: InputDecoration(label: Text("Text")),
          onChanged: (v) => {text = v}),
      TextField(
          decoration: InputDecoration(label: Text("Image")),
          onChanged: (v) => {image = v}),
      TextField(
          decoration: InputDecoration(label: Text("Title")),
          onChanged: (v) => {url = v}),
      TextButton(
          onPressed: () => widget.addPost(Post(title, text, image, url)),
          child: Text("Submit"))
    ]);
  }
}
