<script type="text/javascript" src="{{ site.url }}/js/jquery-2.1.4.min.js"></script>
//<script type="text/javascript" src="{{ site.url }}/js/main.js"></script>

{% if site.owner.google.analytics %}
<!-- Google Analytics -->
<script>

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', '{{ site.owner.google.analytics }}', 'auto');
ga('send', 'pageview');

</script>
<!-- End Google Analytics -->
{% endif %}
