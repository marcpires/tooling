

Commands 
configure -> project

path: is a github repository url
  1) try to clone the repo
  2) Create repo locally if it does not exist on GH (Necessary ?)
  3) Determine project type (node, java) to create the configuration
  4) alias for projects repo with .git on config store
     projects: {
       "repo": "address"
     }

Credentials

To keep credentials secure ci-tools leaverage the user's OS keychain manager. On Linux 
credentials are managed by the Secret Service API/libsecret, on MacOS they are managed by the Keychain and on Windows they are managed by Credential Vault.