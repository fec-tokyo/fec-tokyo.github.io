#!/bin/bash
file_path=$(jq -r '.tool_input.file_path // empty')

if [[ -n "$file_path" && "$file_path" =~ \.(js|ts|jsx|tsx|html|css|scss|json|md|mdx|yml|yaml|astro)$ ]]; then
    npx prettier --write "$file_path"
fi
