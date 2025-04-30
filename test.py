
# Count up and down functions
import threading
import time

lock = threading.Lock()
up_ready = threading.Event()
down_ready = threading.Event()

# Create the count up function.
def count_up():
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for num in numbers:
        down_ready.wait()
        lock.acquire()
        print(f"Counting up: {num}")
        lock.release()
        if num == 10:
            print("Done!")
        else:
            down_ready.clear()
            up_ready.set()
            

# Meanwhile, here's the count down function
def count_down():
    numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    for num in numbers:
        up_ready.wait()
        lock.acquire()
        print(f"Counting down: {num}")
        lock.release()
        if num == 1:
            print("Done!")
        else:
            up_ready.clear()
            down_ready.set()

# The main function is where everything else goes
def main():
    # Create the threads for counting up and counting down.
    count_up_thread = threading.Thread(target=count_up)
    count_down_thread = threading.Thread(target=count_down)

    # Starts the thread that counts down.
    down_ready.set()

    # Starts up both threads. 
    count_up_thread.start()
    count_down_thread.start()

    # Finishes the thread.
    
    count_down_thread.join()
    count_up_thread.join()


if __name__ == "__main__":
    main()
