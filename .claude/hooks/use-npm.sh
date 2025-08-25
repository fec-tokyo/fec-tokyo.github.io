#!/bin/bash

input_data=$(cat)

tool=$(echo "$input_data" | jq -r '.tool_name // empty')
command=$(echo "$input_data" | jq -r '.tool_input.command // empty')

# Bashコマンドか判定
if [[ "$tool" != "Bash" ]]; then
    echo '{"decision": "approve"}'
    exit 0
fi

# 使用を制限するパッケージマネージャー
prohibited_managers=("yarn" "pnpm" "bun")

# Check if the command contains any prohibited package manager
for manager in "${prohibited_managers[@]}"; do
    # Use word boundaries to avoid false positives (e.g., "bun" containing "npm")
    if [[ "$command" =~ (^|[[:space:]])$manager($|[[:space:]]) ]]; then
        # Replace the prohibited manager with bun
        modified_command=$(echo "$command" | sed "s/\b$manager\b/npm/g")
        
        # Create response JSON
        response=$(jq -n \
            --arg original "$command" \
            --arg suggested "$modified_command" \
            --arg manager "$manager" \
            '{
                decision: "block",
                reason: ($manager + " commands are not allowed. Use npm instead.)
            }')
        
        echo "$response"
        exit 0
    fi
done

# Allow commands without prohibited package managers to proceed
echo '{"decision": "approve"}'
exit 0
