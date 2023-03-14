import { Show } from "solid-js";
import type { Accessor, Setter } from "solid-js";
import IconEnv from "./icons/Env";

interface Props {
  canEdit: Accessor<boolean>;
  systemRoleEditing: Accessor<boolean>;
  setSystemRoleEditing: Setter<boolean>;
  currentSystemRoleSettings: Accessor<string>;
  setCurrentSystemRoleSettings: Setter<string>;
}

export default (props: Props) => {
  let systemInputRef: HTMLTextAreaElement;

  const handleButtonClick = () => {
    props.setCurrentSystemRoleSettings(systemInputRef.value);
    props.setSystemRoleEditing(false);
  };

  return (
    <div class="my-4">
      <Show when={!props.systemRoleEditing()}>
        <Show when={props.currentSystemRoleSettings()}>
          <div>
            <div class="fi gap-1 op-50 dark:op-60">
              <IconEnv />
              <span>System Role:</span>
            </div>
            <div class="mt-1">{props.currentSystemRoleSettings()}</div>
          </div>
        </Show>
        <Show when={!props.currentSystemRoleSettings() && props.canEdit()}>
          <span
            onClick={() =>
              props.setSystemRoleEditing(!props.systemRoleEditing())
            }
            class="sys-edit-btn"
          >
            <IconEnv />
            <span>设置角色</span>
          </span>
        </Show>
      </Show>
      <Show when={props.systemRoleEditing() && props.canEdit()}>
        <div>
          <div class="fi gap-1 op-50 dark:op-60">
            <IconEnv />
            <span>角色:</span>
          </div>
          <p class="my-2 leading-normal text-sm op-50 dark:op-60">
            指导助手，设置助手的行为。
          </p>
          <div>
            <textarea
              ref={systemInputRef!}
              placeholder="尽量简明扼要地回答"
              autocomplete="off"
              autofocus
              rows="3"
              gen-textarea
            />
          </div>
          <button onClick={handleButtonClick} gen-slate-btn>
            设置
          </button>
        </div>
      </Show>
    </div>
  );
};
