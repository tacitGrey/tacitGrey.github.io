---
permalink: "/first/"
---

<html>
    <head>
        {% assign url = (site.pages | where:"type","comic-page" | sort:"index" | first) %}
        <meta http-equiv="refresh" content="0; URL='{{ url.permalink }}'" />
    </head>
</html>