import time
import ubinascii
import machine
import micropython
import network
from utility import *

class WifiManager:

    def __init__(self):
        self.client = None
        self.wifi_ssid = None
        self.wifi_password = None

    def connect_wifi(self, ssid, password, wait_for_connected=True):
        self.wifi_ssid = ssid
        self.wifi_password = password
        say('Connecting to WiFi...')
        self.station = network.WLAN(network.STA_IF)
        if self.station.active():
            self.station.active(False)
            time.sleep_ms(500)

        for i in range(5):
          try:
              self.station.active(True)
              self.station.connect(ssid, password)
              break
          except OSError:
              self.station.active(False)
              time.sleep_ms(500)
              if i == 4:
                  say('Failed to connect to WiFi')
                  raise Exception('Failed to connect to WiFi')

        if wait_for_connected:
            count = 0
            while self.station.isconnected() == False:
                count = count + 1
                if count > 150:
                    say('Failed to connect to WiFi')
                    raise Exception('Failed to connect to WiFi')
                time.sleep_ms(100)

            say('Wifi connected. IP:' + self.station.ifconfig()[0])

    def isconnected(self):
        return self.station.isconnected()

    def reconnect(self):
        if not self.isconnected():
          say('Wifi disconnected. Reconnecting to WiFi...')
          self.connect_wifi(self.wifi_ssid, self.wifi_password)

    def start_wifi(self, wifi_name, password=None):
        if password and len(password) < 8:
          say('Wifi password too short')
          raise Exception('Failed to start wifi assess point')

        self.ap = network.WLAN(network.AP_IF)
        self.ap.active(False)
        time.sleep_ms(100)
        self.ap.active(True)
        self.ap.config(essid=wifi_name, password=password, authmode=network.AUTH_WPA_WPA2_PSK)

        while self.ap.active() == False:
            time.sleep_ms(100)

        print('Start wifi access point successfully')
        print(self.ap.ifconfig())

wifi_manager = WifiManager()

