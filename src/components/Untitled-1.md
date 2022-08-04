
git remote -v
    main    https://github.com/AjayRathod007/wallet (fetch)
    main    https://github.com/AjayRathod007/wallet (push)
    origin  https://github.com/AjayRathod007/wallet.git (fetch)
    origin  https://github.com/AjayRathod007/wallet.git (push)


 git remote set-url origin https://github.com/AjayRathod007/wallet.git
        https://github.com/AjayRathod007/Restaurant-FrontEnd.git

 git push -u origin main (if this is not allowed)
        To https://github.com/AjayRathod007/wallet.git
        ! [rejected]        main -> main (non-fast-forward)
        error: failed to push some refs to 'https://github.com/AjayRathod007/wallet.git'
        hint: Updates were rejected because the tip of your current branch is behind
        hint: its remote counterpart. Integrate the remote changes (e.g.
        hint: 'git pull ...') before pushing again.
        hint: See the 'Note about fast-forwards' in 'git push --help' for details.
git pull origin main --allow-unrelated-histories


  git push -u origin master



Cloud -> NodeC -> Head

Local -> NodeL -> Head