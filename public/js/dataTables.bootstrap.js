




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>Plugins/integration/bootstrap/3/dataTables.bootstrap.js at master · DataTables/Plugins</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="DataTables/Plugins" name="twitter:title" /><meta content="Plugins - Plug-ins for DataTables" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/278219?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/278219?s=400" property="og:image" /><meta content="DataTables/Plugins" property="og:title" /><meta content="https://github.com/DataTables/Plugins" property="og:url" /><meta content="Plugins - Plug-ins for DataTables" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="553B2CA3:089C:89A3746:538F4701" name="octolytics-dimension-request_id" /><meta content="3088246" name="octolytics-actor-id" /><meta content="manuelcalerosolis" name="octolytics-actor-login" /><meta content="4a73b675d3f4aed6161127706c4079bcede46fec907b8da2d93b0f640b61c08c" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="S+jdhAXKSiSOjPtsZyKc2zRMcqhH0FBJnBnrtiOVZI6qnrLJNswjfNCvHLr2TGDTIs6vRmpsmA+zSbFmjvxuTg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-4ac25d70274449501147e0083762d5e7b43867f9.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-3a8ed4d319848b9ce07155bc59e0dcf7167d8748.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="e638d333663406b8a9cf42c4d37053ef">

      
  <meta name="description" content="Plugins - Plug-ins for DataTables" />

  <meta content="278219" name="octolytics-dimension-user_id" /><meta content="DataTables" name="octolytics-dimension-user_login" /><meta content="4505588" name="octolytics-dimension-repository_id" /><meta content="DataTables/Plugins" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="4505588" name="octolytics-dimension-repository_network_root_id" /><meta content="DataTables/Plugins" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/DataTables/Plugins/commits/master.atom" rel="alternate" title="Recent Commits to Plugins:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="manuelcalerosolis"
      data-repo="DataTables/Plugins"
      data-branch="master"
      data-sha="fc4a54e47eeaf1598baac1193f65c79486cb8264"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="DataTables/Plugins" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/manuelcalerosolis" class="name">
        <img alt="manuelcalerosolis" class=" js-avatar" data-user="3088246" height="20" src="https://avatars3.githubusercontent.com/u/3088246?s=140" width="20" /> manuelcalerosolis
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <form class="logout-form" action="/logout" method="post">
        <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
          <span class="octicon octicon-sign-out"></span>
        </button>
      </form>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="DataTables/Plugins">This repository</span>
    </li>
      <li>
        <a href="/DataTables/Plugins/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="tJWf7Dxk7FwB9sS40pknZpQOl1CiyRYSO/uXvTXusGVdrBaAamF/OECecYPrhyN7taOHTlnjRwSDJALe0DYiUw==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="4505588" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/DataTables/Plugins/watchers">
        50
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-x js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/DataTables/Plugins/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="tO115pDmPRFZvsJ+G0UqNa1A9dhXSzkeCxdS3EovreBFrzKJ+j19BuGyopivvmzrQeEq9lV0GNOEkOEQ9tfM2A==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar DataTables/Plugins">
        <span class="octicon octicon-star"></span><span class="text">Unstar</span>
      </button>
        <a class="social-count js-social-count" href="/DataTables/Plugins/stargazers">
          202
        </a>
</form>
    <form accept-charset="UTF-8" action="/DataTables/Plugins/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="zb20oikfrhqmmsw29eMcarHVlqT96XjWS/01uAbkxCsWJy82KH20k0nG6nSsxvNyxiWh21oSd2mF4VbqD6vVvQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star DataTables/Plugins">
        <span class="octicon octicon-star"></span><span class="text">Star</span>
      </button>
        <a class="social-count js-social-count" href="/DataTables/Plugins/stargazers">
          202
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/DataTables/Plugins/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of DataTables/Plugins to your account" aria-label="Fork your own copy of DataTables/Plugins to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span><span class="text">Fork</span>
          </a>
          <a href="/DataTables/Plugins/network" class="social-count">418</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/DataTables" class="url fn" itemprop="url" rel="author"><span itemprop="title">DataTables</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/DataTables/Plugins" class="js-current-repository js-repo-home-link">Plugins</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/DataTables/Plugins" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /DataTables/Plugins">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/DataTables/Plugins/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /DataTables/Plugins/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>14</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/DataTables/Plugins/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /DataTables/Plugins/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>4</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/DataTables/Plugins/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /DataTables/Plugins/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/DataTables/Plugins/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /DataTables/Plugins/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/DataTables/Plugins/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /DataTables/Plugins/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/DataTables/Plugins/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /DataTables/Plugins/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/DataTables/Plugins.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/DataTables/Plugins.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:DataTables/Plugins.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:DataTables/Plugins.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/DataTables/Plugins" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/DataTables/Plugins" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/DataTables/Plugins" class="minibutton sidebar-button" title="Save DataTables/Plugins to your computer and use it in GitHub Desktop." aria-label="Save DataTables/Plugins to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/DataTables/Plugins/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download DataTables/Plugins as a zip file"
                   title="Download DataTables/Plugins as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/DataTables/Plugins/blob/6caf2feedb63f52c8d252c84ccb9a9df9a1fe4f5/integration/bootstrap/3/dataTables.bootstrap.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f7fe79f23890b8c2c8b223e037e20057 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/DataTables/Plugins/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DataTables/Plugins/blob/gh-pages/integration/bootstrap/3/dataTables.bootstrap.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/DataTables/Plugins/blob/master/integration/bootstrap/3/dataTables.bootstrap.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DataTables/Plugins" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Plugins</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DataTables/Plugins/tree/master/integration" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">integration</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DataTables/Plugins/tree/master/integration/bootstrap" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/DataTables/Plugins/tree/master/integration/bootstrap/3" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">3</span></a></span><span class="separator"> / </span><strong class="final-path">dataTables.bootstrap.js</strong> <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="integration/bootstrap/3/dataTables.bootstrap.js" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>
</div>


  <div class="commit file-history-tease">
      <img alt="Allan Jardine" class="main-avatar js-avatar" data-user="278219" height="24" src="https://avatars1.githubusercontent.com/u/278219?s=140" width="24" />
      <span class="author"><a href="/DataTables" rel="author">DataTables</a></span>
      <time datetime="2013-12-25T23:10:25Z" is="relative-time">December 25, 2013</time>
      <div class="commit-title">
          <a href="/DataTables/Plugins/commit/45c45f9b41fa52478a2c1bcc904243ead751f736" class="message" data-pjax="true" title="Bootstrap + Foundation integraiton update for DataTables 1.10

- Add a pageButton renderer to the foundation integration script
- Add foundation example HTML page (links need to be updated)
- Correct errors in Bootstrap integration for ellispsis click and page
  title">Bootstrap + Foundation integraiton update for DataTables 1.10</a>
      </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong>  contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Allan Jardine" class=" js-avatar" data-user="278219" height="24" src="https://avatars1.githubusercontent.com/u/278219?s=140" width="24" />
            <a href="/DataTables">DataTables</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>252 lines (223 sloc)</span>
          <span class="meta-divider"></span>
        <span>6.86 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/DataTables/Plugins?branch=master&amp;filepath=integration%2Fbootstrap%2F3%2FdataTables.bootstrap.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/DataTables/Plugins/edit/master/integration/bootstrap/3/dataTables.bootstrap.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/DataTables/Plugins/raw/master/integration/bootstrap/3/dataTables.bootstrap.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/DataTables/Plugins/blame/master/integration/bootstrap/3/dataTables.bootstrap.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/DataTables/Plugins/commits/master/integration/bootstrap/3/dataTables.bootstrap.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/DataTables/Plugins/delete/master/integration/bootstrap/3/dataTables.bootstrap.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/* Set the defaults for DataTables initialisation */</span></div><div class='line' id='LC2'><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">defaults</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC3'>	<span class="s2">&quot;sDom&quot;</span><span class="o">:</span></div><div class='line' id='LC4'>		<span class="s2">&quot;&lt;&#39;row&#39;&lt;&#39;col-xs-6&#39;l&gt;&lt;&#39;col-xs-6&#39;f&gt;r&gt;&quot;</span><span class="o">+</span></div><div class='line' id='LC5'>		<span class="s2">&quot;t&quot;</span><span class="o">+</span></div><div class='line' id='LC6'>		<span class="s2">&quot;&lt;&#39;row&#39;&lt;&#39;col-xs-6&#39;i&gt;&lt;&#39;col-xs-6&#39;p&gt;&gt;&quot;</span><span class="p">,</span></div><div class='line' id='LC7'>	<span class="s2">&quot;oLanguage&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC8'>		<span class="s2">&quot;sLengthMenu&quot;</span><span class="o">:</span> <span class="s2">&quot;_MENU_ records per page&quot;</span></div><div class='line' id='LC9'>	<span class="p">}</span></div><div class='line' id='LC10'><span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="cm">/* Default class modification */</span></div><div class='line' id='LC14'><span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTableExt</span><span class="p">.</span><span class="nx">oStdClasses</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC15'>	<span class="s2">&quot;sWrapper&quot;</span><span class="o">:</span> <span class="s2">&quot;dataTables_wrapper form-inline&quot;</span><span class="p">,</span></div><div class='line' id='LC16'>	<span class="s2">&quot;sFilterInput&quot;</span><span class="o">:</span> <span class="s2">&quot;form-control input-sm&quot;</span><span class="p">,</span></div><div class='line' id='LC17'>	<span class="s2">&quot;sLengthSelect&quot;</span><span class="o">:</span> <span class="s2">&quot;form-control input-sm&quot;</span></div><div class='line' id='LC18'><span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC19'><br/></div><div class='line' id='LC20'><span class="c1">// In 1.10 we use the pagination renderers to draw the Bootstrap paging,</span></div><div class='line' id='LC21'><span class="c1">// rather than  custom plug-in</span></div><div class='line' id='LC22'><span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">Api</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC23'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">defaults</span><span class="p">.</span><span class="nx">renderer</span> <span class="o">=</span> <span class="s1">&#39;bootstrap&#39;</span><span class="p">;</span></div><div class='line' id='LC24'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">ext</span><span class="p">.</span><span class="nx">renderer</span><span class="p">.</span><span class="nx">pageButton</span><span class="p">.</span><span class="nx">bootstrap</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">settings</span><span class="p">,</span> <span class="nx">host</span><span class="p">,</span> <span class="nx">idx</span><span class="p">,</span> <span class="nx">buttons</span><span class="p">,</span> <span class="nx">page</span><span class="p">,</span> <span class="nx">pages</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC25'>		<span class="kd">var</span> <span class="nx">api</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">Api</span><span class="p">(</span> <span class="nx">settings</span> <span class="p">);</span></div><div class='line' id='LC26'>		<span class="kd">var</span> <span class="nx">classes</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">oClasses</span><span class="p">;</span></div><div class='line' id='LC27'>		<span class="kd">var</span> <span class="nx">lang</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">oLanguage</span><span class="p">.</span><span class="nx">oPaginate</span><span class="p">;</span></div><div class='line' id='LC28'>		<span class="kd">var</span> <span class="nx">btnDisplay</span><span class="p">,</span> <span class="nx">btnClass</span><span class="p">;</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>		<span class="kd">var</span> <span class="nx">attach</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">container</span><span class="p">,</span> <span class="nx">buttons</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC31'>			<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">ien</span><span class="p">,</span> <span class="nx">node</span><span class="p">,</span> <span class="nx">button</span><span class="p">;</span></div><div class='line' id='LC32'>			<span class="kd">var</span> <span class="nx">clickHandler</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">e</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>				<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC34'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">action</span> <span class="o">!==</span> <span class="s1">&#39;ellipsis&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC35'>					<span class="nx">api</span><span class="p">.</span><span class="nx">page</span><span class="p">(</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">action</span> <span class="p">).</span><span class="nx">draw</span><span class="p">(</span> <span class="kc">false</span> <span class="p">);</span></div><div class='line' id='LC36'>				<span class="p">}</span></div><div class='line' id='LC37'>			<span class="p">};</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>			<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="nx">ien</span><span class="o">=</span><span class="nx">buttons</span><span class="p">.</span><span class="nx">length</span> <span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">ien</span> <span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>				<span class="nx">button</span> <span class="o">=</span> <span class="nx">buttons</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC41'><br/></div><div class='line' id='LC42'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span> <span class="nx">button</span> <span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC43'>					<span class="nx">attach</span><span class="p">(</span> <span class="nx">container</span><span class="p">,</span> <span class="nx">button</span> <span class="p">);</span></div><div class='line' id='LC44'>				<span class="p">}</span></div><div class='line' id='LC45'>				<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC46'>					<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC47'>					<span class="nx">btnClass</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>					<span class="k">switch</span> <span class="p">(</span> <span class="nx">button</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>						<span class="k">case</span> <span class="s1">&#39;ellipsis&#39;</span><span class="o">:</span></div><div class='line' id='LC51'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="s1">&#39;&amp;hellip;&#39;</span><span class="p">;</span></div><div class='line' id='LC52'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="s1">&#39;disabled&#39;</span><span class="p">;</span></div><div class='line' id='LC53'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC54'><br/></div><div class='line' id='LC55'>						<span class="k">case</span> <span class="s1">&#39;first&#39;</span><span class="o">:</span></div><div class='line' id='LC56'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">sFirst</span><span class="p">;</span></div><div class='line' id='LC57'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="p">(</span><span class="nx">page</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span></div><div class='line' id='LC58'>								<span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39; disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC59'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>						<span class="k">case</span> <span class="s1">&#39;previous&#39;</span><span class="o">:</span></div><div class='line' id='LC62'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">sPrevious</span><span class="p">;</span></div><div class='line' id='LC63'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="p">(</span><span class="nx">page</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">?</span></div><div class='line' id='LC64'>								<span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39; disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC65'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>						<span class="k">case</span> <span class="s1">&#39;next&#39;</span><span class="o">:</span></div><div class='line' id='LC68'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">sNext</span><span class="p">;</span></div><div class='line' id='LC69'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="p">(</span><span class="nx">page</span> <span class="o">&lt;</span> <span class="nx">pages</span><span class="o">-</span><span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC70'>								<span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39; disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC71'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>						<span class="k">case</span> <span class="s1">&#39;last&#39;</span><span class="o">:</span></div><div class='line' id='LC74'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">lang</span><span class="p">.</span><span class="nx">sLast</span><span class="p">;</span></div><div class='line' id='LC75'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="p">(</span><span class="nx">page</span> <span class="o">&lt;</span> <span class="nx">pages</span><span class="o">-</span><span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC76'>								<span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="s1">&#39; disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC77'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>						<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC80'>							<span class="nx">btnDisplay</span> <span class="o">=</span> <span class="nx">button</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC81'>							<span class="nx">btnClass</span> <span class="o">=</span> <span class="nx">page</span> <span class="o">===</span> <span class="nx">button</span> <span class="o">?</span></div><div class='line' id='LC82'>								<span class="s1">&#39;active&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC83'>							<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC84'>					<span class="p">}</span></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">btnDisplay</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>						<span class="nx">node</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;li&gt;&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC88'>								<span class="s1">&#39;class&#39;</span><span class="o">:</span> <span class="nx">classes</span><span class="p">.</span><span class="nx">sPageButton</span><span class="o">+</span><span class="s1">&#39; &#39;</span><span class="o">+</span><span class="nx">btnClass</span><span class="p">,</span></div><div class='line' id='LC89'>								<span class="s1">&#39;aria-controls&#39;</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">sTableId</span><span class="p">,</span></div><div class='line' id='LC90'>								<span class="s1">&#39;tabindex&#39;</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">iTabIndex</span><span class="p">,</span></div><div class='line' id='LC91'>								<span class="s1">&#39;id&#39;</span><span class="o">:</span> <span class="nx">idx</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">button</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span> <span class="o">?</span></div><div class='line' id='LC92'>									<span class="nx">settings</span><span class="p">.</span><span class="nx">sTableId</span> <span class="o">+</span><span class="s1">&#39;_&#39;</span><span class="o">+</span> <span class="nx">button</span> <span class="o">:</span></div><div class='line' id='LC93'>									<span class="kc">null</span></div><div class='line' id='LC94'>							<span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC95'>							<span class="p">.</span><span class="nx">append</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;a&gt;&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC96'>									<span class="s1">&#39;href&#39;</span><span class="o">:</span> <span class="s1">&#39;#&#39;</span></div><div class='line' id='LC97'>								<span class="p">}</span> <span class="p">)</span></div><div class='line' id='LC98'>								<span class="p">.</span><span class="nx">html</span><span class="p">(</span> <span class="nx">btnDisplay</span> <span class="p">)</span></div><div class='line' id='LC99'>							<span class="p">)</span></div><div class='line' id='LC100'>							<span class="p">.</span><span class="nx">appendTo</span><span class="p">(</span> <span class="nx">container</span> <span class="p">);</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'>						<span class="nx">settings</span><span class="p">.</span><span class="nx">oApi</span><span class="p">.</span><span class="nx">_fnBindAction</span><span class="p">(</span></div><div class='line' id='LC103'>							<span class="nx">node</span><span class="p">,</span> <span class="p">{</span><span class="nx">action</span><span class="o">:</span> <span class="nx">button</span><span class="p">},</span> <span class="nx">clickHandler</span></div><div class='line' id='LC104'>						<span class="p">);</span></div><div class='line' id='LC105'>					<span class="p">}</span></div><div class='line' id='LC106'>				<span class="p">}</span></div><div class='line' id='LC107'>			<span class="p">}</span></div><div class='line' id='LC108'>		<span class="p">};</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>		<span class="nx">attach</span><span class="p">(</span></div><div class='line' id='LC111'>			<span class="nx">$</span><span class="p">(</span><span class="nx">host</span><span class="p">).</span><span class="nx">empty</span><span class="p">().</span><span class="nx">html</span><span class="p">(</span><span class="s1">&#39;&lt;ul class=&quot;pagination&quot;/&gt;&#39;</span><span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;ul&#39;</span><span class="p">),</span></div><div class='line' id='LC112'>			<span class="nx">buttons</span></div><div class='line' id='LC113'>		<span class="p">);</span></div><div class='line' id='LC114'>	<span class="p">}</span></div><div class='line' id='LC115'><span class="p">}</span></div><div class='line' id='LC116'><span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC117'>	<span class="c1">// Integration for 1.9-</span></div><div class='line' id='LC118'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTable</span><span class="p">.</span><span class="nx">defaults</span><span class="p">.</span><span class="nx">sPaginationType</span> <span class="o">=</span> <span class="s1">&#39;bootstrap&#39;</span><span class="p">;</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>	<span class="cm">/* API method to get paging information */</span></div><div class='line' id='LC121'>	<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTableExt</span><span class="p">.</span><span class="nx">oApi</span><span class="p">.</span><span class="nx">fnPagingInfo</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">oSettings</span> <span class="p">)</span></div><div class='line' id='LC122'>	<span class="p">{</span></div><div class='line' id='LC123'>		<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC124'>			<span class="s2">&quot;iStart&quot;</span><span class="o">:</span>         <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayStart</span><span class="p">,</span></div><div class='line' id='LC125'>			<span class="s2">&quot;iEnd&quot;</span><span class="o">:</span>           <span class="nx">oSettings</span><span class="p">.</span><span class="nx">fnDisplayEnd</span><span class="p">(),</span></div><div class='line' id='LC126'>			<span class="s2">&quot;iLength&quot;</span><span class="o">:</span>        <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span><span class="p">,</span></div><div class='line' id='LC127'>			<span class="s2">&quot;iTotal&quot;</span><span class="o">:</span>         <span class="nx">oSettings</span><span class="p">.</span><span class="nx">fnRecordsTotal</span><span class="p">(),</span></div><div class='line' id='LC128'>			<span class="s2">&quot;iFilteredTotal&quot;</span><span class="o">:</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">fnRecordsDisplay</span><span class="p">(),</span></div><div class='line' id='LC129'>			<span class="s2">&quot;iPage&quot;</span><span class="o">:</span>          <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC130'>				<span class="mi">0</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayStart</span> <span class="o">/</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span> <span class="p">),</span></div><div class='line' id='LC131'>			<span class="s2">&quot;iTotalPages&quot;</span><span class="o">:</span>    <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span> <span class="o">?</span></div><div class='line' id='LC132'>				<span class="mi">0</span> <span class="o">:</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">ceil</span><span class="p">(</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">fnRecordsDisplay</span><span class="p">()</span> <span class="o">/</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayLength</span> <span class="p">)</span></div><div class='line' id='LC133'>		<span class="p">};</span></div><div class='line' id='LC134'>	<span class="p">};</span></div><div class='line' id='LC135'><br/></div><div class='line' id='LC136'>	<span class="cm">/* Bootstrap style pagination control */</span></div><div class='line' id='LC137'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">dataTableExt</span><span class="p">.</span><span class="nx">oPagination</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC138'>		<span class="s2">&quot;bootstrap&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC139'>			<span class="s2">&quot;fnInit&quot;</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">oSettings</span><span class="p">,</span> <span class="nx">nPaging</span><span class="p">,</span> <span class="nx">fnDraw</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC140'>				<span class="kd">var</span> <span class="nx">oLang</span> <span class="o">=</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">oLanguage</span><span class="p">.</span><span class="nx">oPaginate</span><span class="p">;</span></div><div class='line' id='LC141'>				<span class="kd">var</span> <span class="nx">fnClickHandler</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">e</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC142'>					<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC143'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">oApi</span><span class="p">.</span><span class="nx">_fnPageChange</span><span class="p">(</span><span class="nx">oSettings</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">action</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>						<span class="nx">fnDraw</span><span class="p">(</span> <span class="nx">oSettings</span> <span class="p">);</span></div><div class='line' id='LC145'>					<span class="p">}</span></div><div class='line' id='LC146'>				<span class="p">};</span></div><div class='line' id='LC147'><br/></div><div class='line' id='LC148'>				<span class="nx">$</span><span class="p">(</span><span class="nx">nPaging</span><span class="p">).</span><span class="nx">append</span><span class="p">(</span></div><div class='line' id='LC149'>					<span class="s1">&#39;&lt;ul class=&quot;pagination&quot;&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC150'>						<span class="s1">&#39;&lt;li class=&quot;prev disabled&quot;&gt;&lt;a href=&quot;#&quot;&gt;&amp;larr; &#39;</span><span class="o">+</span><span class="nx">oLang</span><span class="p">.</span><span class="nx">sPrevious</span><span class="o">+</span><span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC151'>						<span class="s1">&#39;&lt;li class=&quot;next disabled&quot;&gt;&lt;a href=&quot;#&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">oLang</span><span class="p">.</span><span class="nx">sNext</span><span class="o">+</span><span class="s1">&#39; &amp;rarr; &lt;/a&gt;&lt;/li&gt;&#39;</span><span class="o">+</span></div><div class='line' id='LC152'>					<span class="s1">&#39;&lt;/ul&gt;&#39;</span></div><div class='line' id='LC153'>				<span class="p">);</span></div><div class='line' id='LC154'>				<span class="kd">var</span> <span class="nx">els</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">nPaging</span><span class="p">);</span></div><div class='line' id='LC155'>				<span class="nx">$</span><span class="p">(</span><span class="nx">els</span><span class="p">[</span><span class="mi">0</span><span class="p">]).</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;click.DT&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">action</span><span class="o">:</span> <span class="s2">&quot;previous&quot;</span> <span class="p">},</span> <span class="nx">fnClickHandler</span> <span class="p">);</span></div><div class='line' id='LC156'>				<span class="nx">$</span><span class="p">(</span><span class="nx">els</span><span class="p">[</span><span class="mi">1</span><span class="p">]).</span><span class="nx">bind</span><span class="p">(</span> <span class="s1">&#39;click.DT&#39;</span><span class="p">,</span> <span class="p">{</span> <span class="nx">action</span><span class="o">:</span> <span class="s2">&quot;next&quot;</span> <span class="p">},</span> <span class="nx">fnClickHandler</span> <span class="p">);</span></div><div class='line' id='LC157'>			<span class="p">},</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>			<span class="s2">&quot;fnUpdate&quot;</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span> <span class="nx">oSettings</span><span class="p">,</span> <span class="nx">fnDraw</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC160'>				<span class="kd">var</span> <span class="nx">iListLength</span> <span class="o">=</span> <span class="mi">5</span><span class="p">;</span></div><div class='line' id='LC161'>				<span class="kd">var</span> <span class="nx">oPaging</span> <span class="o">=</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">oInstance</span><span class="p">.</span><span class="nx">fnPagingInfo</span><span class="p">();</span></div><div class='line' id='LC162'>				<span class="kd">var</span> <span class="nx">an</span> <span class="o">=</span> <span class="nx">oSettings</span><span class="p">.</span><span class="nx">aanFeatures</span><span class="p">.</span><span class="nx">p</span><span class="p">;</span></div><div class='line' id='LC163'>				<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">ien</span><span class="p">,</span> <span class="nx">j</span><span class="p">,</span> <span class="nx">sClass</span><span class="p">,</span> <span class="nx">iStart</span><span class="p">,</span> <span class="nx">iEnd</span><span class="p">,</span> <span class="nx">iHalf</span><span class="o">=</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nx">iListLength</span><span class="o">/</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="o">&lt;</span> <span class="nx">iListLength</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>					<span class="nx">iStart</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC167'>					<span class="nx">iEnd</span> <span class="o">=</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="p">;</span></div><div class='line' id='LC168'>				<span class="p">}</span></div><div class='line' id='LC169'>				<span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">&lt;=</span> <span class="nx">iHalf</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>					<span class="nx">iStart</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC171'>					<span class="nx">iEnd</span> <span class="o">=</span> <span class="nx">iListLength</span><span class="p">;</span></div><div class='line' id='LC172'>				<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">&gt;=</span> <span class="p">(</span><span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="nx">iHalf</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC173'>					<span class="nx">iStart</span> <span class="o">=</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="o">-</span> <span class="nx">iListLength</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC174'>					<span class="nx">iEnd</span> <span class="o">=</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="p">;</span></div><div class='line' id='LC175'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC176'>					<span class="nx">iStart</span> <span class="o">=</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">-</span> <span class="nx">iHalf</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC177'>					<span class="nx">iEnd</span> <span class="o">=</span> <span class="nx">iStart</span> <span class="o">+</span> <span class="nx">iListLength</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC178'>				<span class="p">}</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>				<span class="k">for</span> <span class="p">(</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="nx">ien</span><span class="o">=</span><span class="nx">an</span><span class="p">.</span><span class="nx">length</span> <span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">ien</span> <span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>					<span class="c1">// Remove the middle elements</span></div><div class='line' id='LC182'>					<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:gt(0)&#39;</span><span class="p">,</span> <span class="nx">an</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;:not(:last)&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></div><div class='line' id='LC183'><br/></div><div class='line' id='LC184'>					<span class="c1">// Add the new list items and their event handlers</span></div><div class='line' id='LC185'>					<span class="k">for</span> <span class="p">(</span> <span class="nx">j</span><span class="o">=</span><span class="nx">iStart</span> <span class="p">;</span> <span class="nx">j</span><span class="o">&lt;=</span><span class="nx">iEnd</span> <span class="p">;</span> <span class="nx">j</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC186'>						<span class="nx">sClass</span> <span class="o">=</span> <span class="p">(</span><span class="nx">j</span><span class="o">==</span><span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span><span class="o">+</span><span class="mi">1</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;class=&quot;active&quot;&#39;</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC187'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;li &#39;</span><span class="o">+</span><span class="nx">sClass</span><span class="o">+</span><span class="s1">&#39;&gt;&lt;a href=&quot;#&quot;&gt;&#39;</span><span class="o">+</span><span class="nx">j</span><span class="o">+</span><span class="s1">&#39;&lt;/a&gt;&lt;/li&gt;&#39;</span><span class="p">)</span></div><div class='line' id='LC188'>							<span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:last&#39;</span><span class="p">,</span> <span class="nx">an</span><span class="p">[</span><span class="nx">i</span><span class="p">])[</span><span class="mi">0</span><span class="p">]</span> <span class="p">)</span></div><div class='line' id='LC189'>							<span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC190'>								<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC191'>								<span class="nx">oSettings</span><span class="p">.</span><span class="nx">_iDisplayStart</span> <span class="o">=</span> <span class="p">(</span><span class="nb">parseInt</span><span class="p">(</span><span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">).</span><span class="nx">text</span><span class="p">(),</span><span class="mi">10</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">*</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iLength</span><span class="p">;</span></div><div class='line' id='LC192'>								<span class="nx">fnDraw</span><span class="p">(</span> <span class="nx">oSettings</span> <span class="p">);</span></div><div class='line' id='LC193'>							<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC194'>					<span class="p">}</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>					<span class="c1">// Add / remove disabled classes from the static elements</span></div><div class='line' id='LC197'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:first&#39;</span><span class="p">,</span> <span class="nx">an</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC199'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC200'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:first&#39;</span><span class="p">,</span> <span class="nx">an</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC201'>					<span class="p">}</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'>					<span class="k">if</span> <span class="p">(</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iPage</span> <span class="o">===</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span><span class="o">-</span><span class="mi">1</span> <span class="o">||</span> <span class="nx">oPaging</span><span class="p">.</span><span class="nx">iTotalPages</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC204'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:last&#39;</span><span class="p">,</span> <span class="nx">an</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">addClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC205'>					<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC206'>						<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;li:last&#39;</span><span class="p">,</span> <span class="nx">an</span><span class="p">[</span><span class="nx">i</span><span class="p">]).</span><span class="nx">removeClass</span><span class="p">(</span><span class="s1">&#39;disabled&#39;</span><span class="p">);</span></div><div class='line' id='LC207'>					<span class="p">}</span></div><div class='line' id='LC208'>				<span class="p">}</span></div><div class='line' id='LC209'>			<span class="p">}</span></div><div class='line' id='LC210'>		<span class="p">}</span></div><div class='line' id='LC211'>	<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC212'><span class="p">}</span></div><div class='line' id='LC213'><br/></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'><span class="cm">/*</span></div><div class='line' id='LC216'><span class="cm"> * TableTools Bootstrap compatibility</span></div><div class='line' id='LC217'><span class="cm"> * Required TableTools 2.1+</span></div><div class='line' id='LC218'><span class="cm"> */</span></div><div class='line' id='LC219'><span class="k">if</span> <span class="p">(</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">DataTable</span><span class="p">.</span><span class="nx">TableTools</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>	<span class="c1">// Set the classes that TableTools uses to something suitable for Bootstrap</span></div><div class='line' id='LC221'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">DataTable</span><span class="p">.</span><span class="nx">TableTools</span><span class="p">.</span><span class="nx">classes</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC222'>		<span class="s2">&quot;container&quot;</span><span class="o">:</span> <span class="s2">&quot;DTTT btn-group&quot;</span><span class="p">,</span></div><div class='line' id='LC223'>		<span class="s2">&quot;buttons&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC224'>			<span class="s2">&quot;normal&quot;</span><span class="o">:</span> <span class="s2">&quot;btn btn-default&quot;</span><span class="p">,</span></div><div class='line' id='LC225'>			<span class="s2">&quot;disabled&quot;</span><span class="o">:</span> <span class="s2">&quot;disabled&quot;</span></div><div class='line' id='LC226'>		<span class="p">},</span></div><div class='line' id='LC227'>		<span class="s2">&quot;collection&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC228'>			<span class="s2">&quot;container&quot;</span><span class="o">:</span> <span class="s2">&quot;DTTT_dropdown dropdown-menu&quot;</span><span class="p">,</span></div><div class='line' id='LC229'>			<span class="s2">&quot;buttons&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC230'>				<span class="s2">&quot;normal&quot;</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC231'>				<span class="s2">&quot;disabled&quot;</span><span class="o">:</span> <span class="s2">&quot;disabled&quot;</span></div><div class='line' id='LC232'>			<span class="p">}</span></div><div class='line' id='LC233'>		<span class="p">},</span></div><div class='line' id='LC234'>		<span class="s2">&quot;print&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC235'>			<span class="s2">&quot;info&quot;</span><span class="o">:</span> <span class="s2">&quot;DTTT_print_info modal&quot;</span></div><div class='line' id='LC236'>		<span class="p">},</span></div><div class='line' id='LC237'>		<span class="s2">&quot;select&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC238'>			<span class="s2">&quot;row&quot;</span><span class="o">:</span> <span class="s2">&quot;active&quot;</span></div><div class='line' id='LC239'>		<span class="p">}</span></div><div class='line' id='LC240'>	<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC241'><br/></div><div class='line' id='LC242'>	<span class="c1">// Have the collection use a bootstrap compatible dropdown</span></div><div class='line' id='LC243'>	<span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">DataTable</span><span class="p">.</span><span class="nx">TableTools</span><span class="p">.</span><span class="nx">DEFAULTS</span><span class="p">.</span><span class="nx">oTags</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC244'>		<span class="s2">&quot;collection&quot;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC245'>			<span class="s2">&quot;container&quot;</span><span class="o">:</span> <span class="s2">&quot;ul&quot;</span><span class="p">,</span></div><div class='line' id='LC246'>			<span class="s2">&quot;button&quot;</span><span class="o">:</span> <span class="s2">&quot;li&quot;</span><span class="p">,</span></div><div class='line' id='LC247'>			<span class="s2">&quot;liner&quot;</span><span class="o">:</span> <span class="s2">&quot;a&quot;</span></div><div class='line' id='LC248'>		<span class="p">}</span></div><div class='line' id='LC249'>	<span class="p">}</span> <span class="p">);</span></div><div class='line' id='LC250'><span class="p">}</span></div><div class='line' id='LC251'><br/></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.08779s from github-fe137-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-be770ee7a7d6343e9465cf4453dfbc663236106a.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-3b464097d64b2866858239cce5318d07c67fda88.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

