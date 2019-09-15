using System;
using System.ComponentModel.DataAnnotations;

namespace Blog.Models
{
	public class BlogPost
	{
		[Key]
		public int PostId { get; set; }
		[Required]
		public string Creator { get; set; }
		[Required]
		public string Title { get; set; }
		[Required]
		public string Body { get; set; }
		[Required]
		public DateTime Dt { get; set; }
	}
}
