// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, SystemTray, SystemTrayMenu, SystemTrayMenuItem};

fn main() {
    let toggle_window = CustomMenuItem::new("toggleWindow".to_string(), "Hide/Show MyArtverse");
    let login_user = CustomMenuItem::new("login".to_string(), "Login/Register to MyArtverse");
    let logout_user = CustomMenuItem::new("logout".to_string(), "Log out...");
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    
    let tray_menu = SystemTrayMenu::new()
        .add_item(toggle_window)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(login_user)
        .add_item(logout_user)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);

    tauri::Builder::default()
        .system_tray(SystemTray::new().with_menu(tray_menu));
        .run(tauri::generate_context!());
        .expect("error while running tauri application");
}
